## Table of contents

### Functions

- [isObject](./utility#isobject)
- [getKeyValue](./utility#getkeyvalue)
- [hasJsonStructure](./utility#hasjsonstructure)
- [safeRead](./utility#saferead)
- [safeWrite](./utility#safewrite)

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

___

### hasJsonStructure

▸ **hasJsonStructure**(`str`): `Boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`Boolean`

___

### safeRead

▸ **safeRead**(`redisKey`, `redisClient`, `schema`): `Promise`<`Object`\>

Read record from Redis and restruct it like schema

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redisKey` | `String` | Redis record key with `keyPrefix` and `keyUnique` |
| `redisClient` | `any` | Connected Redis client |
| `schema` | `Object` | Model schema |

#### Returns

`Promise`<`Object`\>

raw object

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
| `schema` | `Object` | `{}` | Model schema |
| `isFlex` | ``null`` \| `Boolean` | `false` | if it is true you can pass diffirent key from schema |

#### Returns

`Promise`<`Object`\>

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
