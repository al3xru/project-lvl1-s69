install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
start-even:
	npm run babel-node -- src/bin/brain-even.js
start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js
start-calc:
	npm run babel-node -- src/bin/brain-calc.js
start-balance:
	npm run babel-node -- src/bin/brain-balance.js
start-progression:
	npm run babel-node -- src/bin/brain-progression.js
start-lib:
	npm run babel-node -- src/lib.js
publish:
	npm publish
lint:
	npm run eslint -- src test