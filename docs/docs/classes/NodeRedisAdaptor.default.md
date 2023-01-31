[metronom](../README.md) / [Modules](../modules.md) / [NodeRedisAdaptor](../modules/NodeRedisAdaptor.md) / default

# Class: default

[NodeRedisAdaptor](../modules/NodeRedisAdaptor.md).default

Redis Interface

## Implements

- [`default`](../interfaces/IRedisAdaptor.default.md)

## Table of contents

### Properties

- [redisClient](NodeRedisAdaptor.default.md#redisclient)

### Constructors

- [constructor](NodeRedisAdaptor.default.md#constructor)

### Methods

- [hGetAll](NodeRedisAdaptor.default.md#hgetall)
- [hSet](NodeRedisAdaptor.default.md#hset)
- [connect](NodeRedisAdaptor.default.md#connect)
- [keys](NodeRedisAdaptor.default.md#keys)
- [del](NodeRedisAdaptor.default.md#del)
- [sendCommand](NodeRedisAdaptor.default.md#sendcommand)
- [echo](NodeRedisAdaptor.default.md#echo)

## Properties

### redisClient

• **redisClient**: `RedisClientType`<`any`, `any`\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[redisClient](../interfaces/IRedisAdaptor.default.md#redisclient)

#### Defined in

[NodeRedisAdaptor.ts:6](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L6)

## Constructors

### constructor

• **new default**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RedisClientOptions`<`Record`<`string`, `never`\>, `Record`<`string`, `never`\>\> |

#### Defined in

[NodeRedisAdaptor.ts:8](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L8)

## Methods

### hGetAll

▸ **hGetAll**(`redisKey`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisKey` | `string` |

#### Returns

`Promise`<`object`\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[hGetAll](../interfaces/IRedisAdaptor.default.md#hgetall)

#### Defined in

[NodeRedisAdaptor.ts:12](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L12)

___

### hSet

▸ **hSet**(`redisKey`, `values`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisKey` | `string` |
| `values` | [`string`, `any`] |

#### Returns

`Promise`<`number`\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[hSet](../interfaces/IRedisAdaptor.default.md#hset)

#### Defined in

[NodeRedisAdaptor.ts:16](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L16)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[connect](../interfaces/IRedisAdaptor.default.md#connect)

#### Defined in

[NodeRedisAdaptor.ts:20](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L20)

___

### keys

▸ **keys**(`regex`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[keys](../interfaces/IRedisAdaptor.default.md#keys)

#### Defined in

[NodeRedisAdaptor.ts:24](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L24)

___

### del

▸ **del**(`redisKey`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisKey` | `string` |

#### Returns

`Promise`<`number`\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[del](../interfaces/IRedisAdaptor.default.md#del)

#### Defined in

[NodeRedisAdaptor.ts:28](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L28)

___

### sendCommand

▸ **sendCommand**(`commands`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `string`[] |

#### Returns

`Promise`<`unknown`\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[sendCommand](../interfaces/IRedisAdaptor.default.md#sendcommand)

#### Defined in

[NodeRedisAdaptor.ts:32](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L32)

___

### echo

▸ **echo**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[default](../interfaces/IRedisAdaptor.default.md).[echo](../interfaces/IRedisAdaptor.default.md#echo)

#### Defined in

[NodeRedisAdaptor.ts:36](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/NodeRedisAdaptor.ts#L36)
