[metronom](../README.md) / [Modules](../modules.md) / [Metronom](../modules/Metronom.md) / default

# Class: default

[Metronom](../modules/Metronom.md).default

Metronom model creator

## Table of contents

### Properties

- [redisClientOptions](Metronom.default.md#redisclientoptions)
- [log](Metronom.default.md#log)

### Constructors

- [constructor](Metronom.default.md#constructor)

### Methods

- [define](Metronom.default.md#define)

## Properties

### redisClientOptions

• `Optional` **redisClientOptions**: `RedisClientOptions`<`Record`<`string`, `never`\>, `Record`<`string`, `never`\>\>

#### Defined in

[Metronom.ts:16](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L16)

___

### log

• `Optional` **log**: `boolean` \| [`LogLevels`](../enums/Enums.LogLevels.md)

#### Defined in

[Metronom.ts:18](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L18)

## Constructors

### constructor

• **new default**(`options`)

Base Metronom object.
You can create new metronom instance with diffirent options like redis url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`MetronomOptions`](../interfaces/Interfaces.MetronomOptions.md) | redis client settings |

#### Defined in

[Metronom.ts:27](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L27)

## Methods

### define

▸ **define**(`schema`, `keyPrefix?`, `modelOptions?`): [`default`](Model.default.md)

Create metronom model from this Metronom object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `schema` | [`Schema`](../interfaces/Interfaces.Schema.md) | `undefined` | Record's key-value schema |
| `keyPrefix` | `string` | `'object'` | Record unique key's prefix. `"users:1234"` --> "`keyPrefix`:`keyUnique`" |
| `modelOptions?` | [`ModelOptions`](../interfaces/Interfaces.ModelOptions.md) | `undefined` | - |

#### Returns

[`default`](Model.default.md)

new record of Model

#### Defined in

[Metronom.ts:46](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Metronom.ts#L46)
