SHELL:=/bin/bash

compile:
	@pnpm compile

dev:
	@pnpm dev

generate_declarations:
	@pnpm generate:declarations

test:
	@pnpm test
