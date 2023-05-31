SHELL:=/bin/bash

compile:
	@pnpm compile

dev:
	@pnpm dev

generate_declarations:
	@pnpm generate:declarations

publish:
	@pnpm publish --access public

test:
	@pnpm test
