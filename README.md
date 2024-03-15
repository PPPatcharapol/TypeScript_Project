To run this project first copy the src and test in your directory then if you run this on VS code open terminal and then type
```
npm init -y
```
To first set up node.js then
```
npm i --save-dev jest @types/jest ts-jest typescript
```
To install jest @types/jest ts-jest typescript then your package.json devDependencies should look like this
```
"devDependencies": {
    "@types/jest": "^29.5.12",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.2",
    "typescript": "^5.4.2"
  }
```
Then change "test" in package.json to jest
```
"test": "jest"
```
And then add jest config to your package.json
```
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
```
And then run unit test with npm test
