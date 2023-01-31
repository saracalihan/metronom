[metronom](../README.md) / [Modules](../modules.md) / [IRedisAdaptor](../modules/IRedisAdaptor.md) / default

# Interface: default

[IRedisAdaptor](../modules/IRedisAdaptor.md).default

Redis Interface

## Implemented by

- [`default`](../classes/NodeRedisAdaptor.default.md)

## Table of contents

### Properties

- [redisClient](IRedisAdaptor.default.md#redisclient)

### Methods

- [hGetAll](IRedisAdaptor.default.md#hgetall)
- [hSet](IRedisAdaptor.default.md#hset)
- [connect](IRedisAdaptor.default.md#connect)
- [keys](IRedisAdaptor.default.md#keys)
- [del](IRedisAdaptor.default.md#del)
- [sendCommand](IRedisAdaptor.default.md#sendcommand)
- [echo](IRedisAdaptor.default.md#echo)

## Properties

### redisClient

• **redisClient**: `any`

#### Defined in

[IRedisAdaptor.ts:8](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L8)

## Methods

### hGetAll

▸ **hGetAll**(`redisKey`): `Promise`<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisKey` | `string` |

#### Returns

`Promise`<`object`\>

#### Defined in

[IRedisAdaptor.ts:9](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L9)

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

#### Defined in

[IRedisAdaptor.ts:10](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L10)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

[IRedisAdaptor.ts:11](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L11)

___

### keys

▸ **keys**(`regex`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[IRedisAdaptor.ts:12](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L12)

___

### del

▸ **del**(`redisKey`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisKey` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[IRedisAdaptor.ts:13](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L13)

___

### sendCommand

▸ **sendCommand**(`commands`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `string`[] |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[IRedisAdaptor.ts:14](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L14)

___

### echo

▸ **echo**(`message`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`any`

#### Defined in

[IRedisAdaptor.ts:15](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/IRedisAdaptor.ts#L15)
