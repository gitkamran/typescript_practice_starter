typescript practice starter
**********
install typescript with npm

npm i typescript -g
**********
config typescript

tsc --init

"rootDir": "./src"

"outDir": "./build/js"

"include": [
"src"
]
**********
watch project

npm install -g ts-node

npm install -g nodemon

tsc -w

cd /src

nodemon --exec ts-node main.ts


