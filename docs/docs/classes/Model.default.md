[metronom](../README.md) / [Modules](../modules.md) / [Model](../modules/Model.md) / default

# Class: default

[Model](../modules/Model.md).default

Model Class

## Indexable

▪ [index: `string`]: `any`

## Table of contents

### Properties

- [keyPrefix](Model.default.md#keyprefix)
- [keyUnique](Model.default.md#keyunique)
- [schema](Model.default.md#schema)
- [redisClient](Model.default.md#redisclient)
- [flexSchema](Model.default.md#flexschema)

### Constructors

- [constructor](Model.default.md#constructor)

### Methods

- [create](Model.default.md#create)
- [\_write](Model.default.md#_write)
- [\_read](Model.default.md#_read)
- [findById](Model.default.md#findbyid)
- [getAll](Model.default.md#getall)
- [filter](Model.default.md#filter)
- [deleteById](Model.default.md#deletebyid)
- [deleteAll](Model.default.md#deleteall)
- [runCommand](Model.default.md#runcommand)
- [generateRedisKey](Model.default.md#generaterediskey)
- [createInstance](Model.default.md#createinstance)

## Properties

### keyPrefix

• **keyPrefix**: `String`

First part of redis key. It's identifier for model class

#### Defined in

[Model.ts:31](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L31)

___

### keyUnique

• **keyUnique**: `undefined` \| `String`

Second part of redis key. It's identifier for record

#### Defined in

[Model.ts:34](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L34)

___

### schema

• **schema**: [`Schema`](../interfaces/Interfaces.Schema.md)

Object struct model

#### Defined in

[Model.ts:37](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L37)

___

### redisClient

• **redisClient**: [`default`](../interfaces/IRedisAdaptor.default.md)

#### Defined in

[Model.ts:39](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L39)

___

### flexSchema

• **flexSchema**: `undefined` \| `Boolean`

you can't define any key except the fields in `schema`, but if this value is `true`,
you can only add a value to the schema by giving it `keyUnique`

#### Defined in

[Model.ts:44](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L44)

## Constructors

### constructor

• **new default**(`schema`, `keyPrefix?`, `modelOption?`)

Represents a Metronom ORM Model

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `schema` | [`Schema`](../interfaces/Interfaces.Schema.md) | `undefined` | Record's key-value schema |
| `keyPrefix` | `string` | `'object'` | Record unique key's prefix. `"users:1234"` --> "`keyPrefix`:`keyUnique`" |
| `modelOption?` | [`ModelOptions`](../interfaces/Interfaces.ModelOptions.md) | `undefined` | Optional model settings. It's include 3 key. + `keyUnique`: it's unique part of model key + `flexSchema`: Normally, you can't define any key except the fields in `schema`, but if this value is `true`, you can only add a value to the schema by giving it `keyUnique` + `redisClientOptions`: node-redis client options. |

#### Defined in

[Model.ts:60](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L60)

## Methods

### create

▸ **create**(`valueObject`): `Promise`<[`default`](ModelInstance.default.md)\>

Creates `ModelInstance` by parameter then saves it to Redis and returns it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valueObject` | `Object` | data to be saved according to the `Model.schema` |

#### Returns

`Promise`<[`default`](ModelInstance.default.md)\>

new ModelInstance

#### Defined in

[Model.ts:105](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L105)

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

#### Defined in

[Model.ts:127](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L127)

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

#### Defined in

[Model.ts:143](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L143)

___

### findById

▸ **findById**(`id`): `Promise`<``null`` \| [`default`](ModelInstance.default.md)\>

Fetches record by `keyUnique`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `any` | `keyUnique` |

#### Returns

`Promise`<``null`` \| [`default`](ModelInstance.default.md)\>

ModelInstance or null

#### Defined in

[Model.ts:156](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L156)

___

### getAll

▸ **getAll**(`options?`): `Promise`<[] \| [`default`](ModelInstance.default.md)[]\>

Fetches all records with the same `keyPrefix` value

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FilterOptions`](../interfaces/Interfaces.FilterOptions.md) |

#### Returns

`Promise`<[] \| [`default`](ModelInstance.default.md)[]\>

List of ModelInstance

#### Defined in

[Model.ts:169](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L169)

___

### filter

▸ **filter**(`filterFunction`): `Promise`<[] \| [`default`](ModelInstance.default.md)[]\>

Filters in the same way as `Array.filter`, pulling all records with the same `keyPrefix` value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterFunction` | [`FilterFunction`](../interfaces/Interfaces.FilterFunction.md) | It takes the values `(value, index, array)` and returns `true` then the record is filtered. It can be asynchronous function |

#### Returns

`Promise`<[] \| [`default`](ModelInstance.default.md)[]\>

Filtred ModelInstances or empty array

#### Defined in

[Model.ts:189](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L189)

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

#### Defined in

[Model.ts:208](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L208)

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

#### Defined in

[Model.ts:216](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L216)

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

#### Defined in

[Model.ts:231](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L231)

___

### generateRedisKey

▸ `Private` **generateRedisKey**(`data`): `string`

Generate full redis key. if model has a `keyUnique` use it
from `data` else generate random unique

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | ModelInstance data |

#### Returns

`string`

#### Defined in

[Model.ts:240](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L240)

___

### createInstance

▸ `Private` **createInstance**(`data`, `dataInfo`): [`default`](ModelInstance.default.md)

Create ModelInstance from raw data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | raw |
| `dataInfo` | [`DataInfo`](../interfaces/Interfaces.DataInfo.md) |  |

#### Returns

[`default`](ModelInstance.default.md)

#### Defined in

[Model.ts:252](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Model.ts#L252)
