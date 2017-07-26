# multi-fetch
Fetching data on 1 line

#### Version 1.0
Support raw fotmat
- [x] JSON
- [ ] JAVASCRIPT
- [ ] Text

Support form-data fotmat
- [x] FORM

Support method
- [x] POST
- [x] GET
- [ ] PUT
- [ ] DELETE
- [ ] PATCH
- [ ] COPY
- [ ] HEAD
- [ ] DELETE

#### Using 
```javascript
npm install multi-fetch --save
```
or
```javascript
yarn add multi-fetch
```

Import on React or Nodejs file
React (ES6) / can use async/await
```javascript
import { FETCHING } from 'multi-fetch'
... class {
   async funtion {
      const response = await FETCHING('https://api.domain.com', {foo: '123', bar: '123'}, 'post', 'json');
   }
}

```
Nodejs
```javascript
const FETCHING = require('multi-fetch').FETCHING
async funtion {
  const response = await FETCHING('https://api.domain.com', {foo: '123', bar: '123'}, 'post', 'json');
}
```


Function data

| variable        | type           | require  |
| ------------- |:-------------:| -----:|
| url      | string | yes |
| data      | object     |   yes |
| method | string ('post', 'get')     |    yes |
| format | string ('json', 'form')     |    yes |


