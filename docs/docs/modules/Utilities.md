[metronom](../README.md) / [Modules](../modules.md) / Utilities

# Module: Utilities

## Table of contents

### Functions

- [isObject](Utilities.md#isobject)
- [getKeyValue](Utilities.md#getkeyvalue)
- [hasJsonStructure](Utilities.md#hasjsonstructure)
- [safeRead](Utilities.md#saferead)
- [safeWrite](Utilities.md#safewrite)
- [throwError](Utilities.md#throwerror)

## Other

### getKeyValue

▸ **getKeyValue**(`key`): (`obj`: `Record`<`string`, `any`\>) => `any`

Get value's of object with key

**`Example`**

```
 getKeyValue("name")(user) // joey
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | wanted key of object |

#### Returns

`fn`

▸ (`obj`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |

##### Returns

`any`

#### Defined in

[Utilities.ts:22](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Utilities.ts#L22)

___

### hasJsonStructure

▸ **hasJsonStructure**(`str`): `Boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`Boolean`

#### Defined in

[Utilities.ts:24](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Utilities.ts#L24)

___

### safeRead

▸ **safeRead**(`redisKey`, `redisClient`, `schema`): `Promise`<`Object`\>

Read record from Redis and restruct it like schema

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redisKey` | `String` | Redis record key with `keyPrefix` and `keyUnique` |
| `redisClient` | `any` | Connected Redis client |
| `schema` | [`Schema`](../interfaces/Interfaces.Schema.md) | Model schema |

#### Returns

`Promise`<`Object`\>

raw object

#### Defined in

[Utilities.ts:43](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Utilities.ts#L43)

___

### safeWrite

▸ **safeWrite**(`data`, `redisKey`, `redisClient`, `schema?`, `isFlex?`): `Promise`<`Object`\>

Control data with isFlex and schema then serialize and write it into redis

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | `Object` | `undefined` | Raw data |
| `redisKey` | `String` | `undefined` | Redis record key with `keyPrefix` and `keyUnique` |
| `redisClient` | `any` | `undefined` | Connected Redis client |
| `schema` | [`Schema`](../interfaces/Interfaces.Schema.md) | `{}` | Model schema |
| `isFlex` | ``null`` \| `Boolean` | `false` | if it is true you can pass diffirent key from schema |

#### Returns

`Promise`<`Object`\>

#### Defined in

[Utilities.ts:74](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Utilities.ts#L74)

___

### throwError

▸ **throwError**(`message`): `never`

Throw and log error with Metronom's internal Logger

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | {string} |

#### Returns

`never`

#### Defined in

[Utilities.ts:108](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Utilities.ts#L108)

## Utilities

### isObject

▸ **isObject**(`variable`): `Boolean`

Utilities

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `any` |

#### Returns

`Boolean`

#### Defined in

[Utilities.ts:10](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Utilities.ts#L10)
