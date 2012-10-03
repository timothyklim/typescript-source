Gem::Specification.new do |s|
  s.name      = 'typescript-source'
  s.version   = '0.8.0.1'
  s.date      = '2012-10-03'

  s.homepage    = "http://typescriptlang.org"
  s.summary     = "Ruby TypeScript Compiler"
  s.description = <<-EOS
    TypeScript is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
  EOS

  s.files = [
    'lib/typescript/typescript.js',
    'lib/typescript/compiler.js',
    'lib/typescript/lib.d.ts',
    'lib/typescript/source.rb'
  ]

  s.authors           = ['TimothyKlim']
  s.email             = 'klimtimothy@gmail.com'
end
