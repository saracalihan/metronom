[Model](../modules/Model).default

Model Class

## Indexable

▪ [index: `string`]: `any`

## Table of contents

### Properties

- [keyPrefix](./Model.default#keyprefix)
- [keyUnique](./Model.default#keyunique)
- [schema](./Model.default#schema)
- [redisClient](./Model.default#redisclient)
- [flexSchema](./Model.default#flexschema)

### Constructors

- [constructor](./Model.default#constructor)

### Methods

- [create](./Model.default#create)
- [getAll](./Model.default#getall)
- [findById](./Model.default#findbyid)
- [deleteById](./Model.default#deletebyid)
- [deleteAll](./Model.default#deleteall)
- [runCommand](./Model.default#runcommand)
- [filter](./Model.default#filter)
- [\_write](./Model.default#_write)
- [\_read](./Model.default#_read)
- [generateRedisKey](./Model.default#generaterediskey)
- [createInstance](./Model.default#createinstance)

## Properties

### keyPrefix

• **keyPrefix**: `String`

First part of redis key. It's identifier for model class

#### Defined in

Model.ts:28

___

### keyUnique

• **keyUnique**: `undefined` \| `String`

Second part of redis key. It's identifier for record

#### Defined in

Model.ts:31

___

### schema

• **schema**: `Object`

Object struct model

#### Defined in

Model.ts:34

___

### redisClient

• **redisClient**: `RedisClientType`<`any`, `any`\>

#### Defined in

Model.ts:36

___

### flexSchema

• **flexSchema**: `undefined` \| `Boolean`

you can't define any key except the fields in `schema`, but if this value is `true`, you can only add a value to the schema by giving it `keyUnique`

#### Defined in

Model.ts:39

## Constructors

### constructor

• **new default**(`schema`, `keyPrefix?`, `modelOption?`)

Represents a Metronom ORM Model

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `schema` | `Object` | `undefined` | Record's key-value schema |
| `keyPrefix` | `string` | `'object'` | Record unique key's prefix. `"users:1234"` --> "`keyPrefix`:`keyUnique`" |
| `modelOption?` | `ModelOptions` | `undefined` | Optional model settings. It's include 3 key.   + `keyUnique`: it's unique part of model key   + `flexSchema`: Normally, you can't define any key except the fields in `schema`, but if this value is `true`, you can only add a value to the schema by giving it `keyUnique`   + `redisClientOptions`: node-redis client options. |

## Methods

### create

▸ **create**(`valueObject`): `Promise`<[`default`](./ModelInstance.default)\>

Creates `ModelInstance` by parameter then saves it to Redis and returns it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valueObject` | `Object` | data to be saved according to the `Model.schema` |

#### Returns

`Promise`<[`default`](./ModelInstance.default)\>

new ModelInstance

___

### getAll

▸ **getAll**(): `Promise`<[] \| [`default`](./ModelInstance.default)[]\>

Fetches all records with the same `keyPrefix` value

#### Returns

`Promise`<[] \| [`default`](./ModelInstance.default)[]\>

List of ModelInstance

___

### findById

▸ **findById**(`id`): `Promise`<``null`` \| [`default`](./ModelInstance.default)\>

Fetches record by `keyUnique`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` | `keyUnique` |

#### Returns

`Promise`<``null`` \| [`default`](./ModelInstance.default)\>

ModelInstance or null

___

### deleteById

▸ **deleteById**(`id`): `Promise`<`number`\>

delete record by `keyUnique`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` | `keyUnique` |

#### Returns

`Promise`<`number`\>

deleted records count it always '1' if it succesfull

___

### deleteAll

▸ **deleteAll**(`options?`): `Promise`<`number`\>

Delete all records with the same `keyPrefix` value

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`number`\>

deleted records count or 0

___

### runCommand

▸ **runCommand**(`commands`): `Promise`<`any`\>

Redis command executer

**`Example`**

```
runCommand(['hget', 'user:1234', 'name'])
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | `any` | Redis command list. |

#### Returns

`Promise`<`any`\>

___

### filter

▸ **filter**(`filterFunction`): `Promise`<[] \| [`default`](./ModelInstance.default)[]\>

Filters in the same way as `Array.filter`, pulling all records with the same `keyPrefix` value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterFunction` | `FilterFunction` | It takes the values `(value, index, array)` and returns `true` then the record is filtered. It can be asynchronous function |

#### Returns

`Promise`<[] \| [`default`](./ModelInstance.default)[]\>

Filtred ModelInstances or empty array

___

### \_write

▸ `Private` **_write**(`redisKey`, `data`): `Promise`<`Object`\>

Internal record save function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redisKey` | `String` | Redis record key with/without `keyUnique` |
| `data` | `Object` |  |

#### Returns

`Promise`<`Object`\>

raw data

___

### \_read

▸ `Private` **_read**(`redisKey`): `Promise`<`Object`\>

Internal read function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redisKey` | `String` | Redis record key with/without `keyUnique` |

#### Returns

`Promise`<`Object`\>

raw data

___

### generateRedisKey

▸ `Private` **generateRedisKey**(`data`): `string`

Generate full redis key. if model has a `keyUnique` use it from `data` else generate random unique

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | ModelInstance data |

#### Returns

`string`

___

### createInstance

▸ `Private` **createInstance**(`data`, `dataInfo`): [`default`](./ModelInstance.default)

Create ModelInstance from raw data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | raw |
| `dataInfo` | [`DataInfo`](../interfaces/ModelInstance.DataInfo) |  |

#### Returns

[`default`](./ModelInstance.default)
