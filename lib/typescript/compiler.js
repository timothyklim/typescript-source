// COPY & PAST

var RubyTypeScriptCompiler = (function(libStr, text) {
  var outfile = { source: "", Write: function (s) { this.source += s; }, WriteLine: function (s) { this.source += s + "\n"; }, Close: function () { } }
  var parseErrors = [];
  var compiler = null;

  function createCompiler(libStr) {
    if (!compiler) {
      compiler = new TypeScript.TypeScriptCompiler(outfile, null);

      compiler.setErrorCallback(function (minChar, charLen, message, unitIndex) {
        compiler.errorReporter.hasErrors = true;
        var msg = "(" + compiler.parser.scanner.line + "," + compiler.parser.scanner.col + "): " + message;
                
        throw new SyntaxError(msg);;
      });

      compiler.parser.errorRecovery = true;
      compiler.addUnit(libStr, "lib.d.ts", true);
      compiler.typeCheck();
      return true;
    } else {
      return false;
    }
  }

  function updateCompileUnit(libStr, prog) {
    if (createCompiler(libStr)) {
      compiler.addUnit(prog, "input.ts");
    } else {
      compiler.updateUnit(prog, "input.ts", false);
    }
  }

  function compile(libStr, prog) {
    updateCompileUnit(libStr, prog);

    parseErrors = [];
    outfile.source = "";
    compiler.reTypeCheck();
    compiler.emit(false, function createFile(fileName) { return outfile; });
    return outfile.source;
  }

  return compile(libStr, text);
});
