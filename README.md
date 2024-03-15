To run this project first 
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
And then add jest config to your package.json
```
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
```
And then run unit test with npm test
