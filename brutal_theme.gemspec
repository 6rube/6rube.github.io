# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "brutal_theme"
  spec.version       = "0.1.0"
  spec.authors       = ["6rube"]
  spec.email         = ["47418292+6rube@users.noreply.github.com"]

  spec.summary       = "Brutal Theme"
  spec.homepage      = "https://6rube.github.io/brutal_theme/"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").reject{|f|f.match(%r{^(test|spec|features)/})}

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
