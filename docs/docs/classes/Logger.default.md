[metronom](../README.md) / [Modules](../modules.md) / [Logger](../modules/Logger.md) / default

# Class: default

[Logger](../modules/Logger.md).default

Metronom's internal logger

## Table of contents

### Properties

- [level](Logger.default.md#level)

### Constructors

- [constructor](Logger.default.md#constructor)

### Methods

- [#log](Logger.default.md##log)
- [log](Logger.default.md#log)
- [error](Logger.default.md#error)

## Properties

### level

▪ `Static` **level**: ``null`` \| [`LogLevels`](../enums/Enums.LogLevels.md) = `null`

#### Defined in

[Logger.ts:8](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Logger.ts#L8)

## Constructors

### constructor

• **new default**(`level?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `level?` | `boolean` \| [`LogLevels`](../enums/Enums.LogLevels.md) |

#### Defined in

[Logger.ts:10](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Logger.ts#L10)

## Methods

### #log

▸ `Static` `Private` **#log**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[Logger.ts:27](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Logger.ts#L27)

___

### log

▸ `Static` **log**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[Logger.ts:31](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Logger.ts#L31)

___

### error

▸ `Static` **error**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[Logger.ts:38](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/Logger.ts#L38)
