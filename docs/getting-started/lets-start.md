# Lets Start
### 1. Create `Metronom` object
The `Metronom` object is create `Model` with your defined options like `port`, `host`, `url` or `ttl`. This step is not required but **recomended** because at the unnormal usage scenario(you need to use diffirent url from default redis ...) you must to pass that options to all `Model` defines otherwise `Metronom` object do it automatically.

```js
import { Metronom, LogLevels } from 'metronom';

const metronom = new Metronom({
  redisClientOptions: {
    host: '172.168.1.123',
    port: 1234
  },
  log: LogLevels.Error
});
```

### 2. Define `Model`
`Model` is redis hash maper. It has two diffirent flow.
+ `flex`: you don't need to define schema. All hash keys dynamically mapped
+ `schema based`: You define type, default value etc. in to the schema and metronom use it read/write operations. Keys not found in the schema are ignored.
```js
const userModel = metronom.define(
// const userModel = new Model(
  schema, redisKeyPrefix, modelOptions
);
```
### 3. Use query inferfaces
Now, you can use all metronom queries(`Metronom`, `Model` and `ModelInstance`) like `Model.create`, `Model.findById`, `Model.destroy`, `ModelInstance.prototype.save`, etc. . For more detail visit [here](/docs/)