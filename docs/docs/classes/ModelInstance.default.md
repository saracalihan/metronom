[metronom](../README.md) / [Modules](../modules.md) / [ModelInstance](../modules/ModelInstance.md) / default

# Class: default

[ModelInstance](../modules/ModelInstance.md).default

ModelInstance Class

## Indexable

▪ [index: `string`]: `any`

## Table of contents

### Properties

- [\_Model](ModelInstance.default.md#_model)

### Constructors

- [constructor](ModelInstance.default.md#constructor)

### Methods

- [save](ModelInstance.default.md#save)
- [getPureData](ModelInstance.default.md#getpuredata)
- [toJSON](ModelInstance.default.md#tojson)
- [destroy](ModelInstance.default.md#destroy)

## Properties

### \_Model

• **\_Model**: [`ModelFields`](../interfaces/Interfaces.ModelFields.md)

#### Defined in

[ModelInstance.ts:17](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/ModelInstance.ts#L17)

## Constructors

### constructor

• **new default**(`data`, `model`, `dataInfo`)

Represents an object produced from Metronom ORM Model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | Lead data |
| `model` | [`default`](Model.default.md) | Parent model to generate object |
| `dataInfo` | [`DataInfo`](../interfaces/Interfaces.DataInfo.md) | The place where redis information about the record is kept. |

#### Defined in

[ModelInstance.ts:28](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/ModelInstance.ts#L28)

## Methods

### save

▸ **save**(): `Promise`<`void`\>

Saves the current state of the object to Redis.

#### Returns

`Promise`<`void`\>

#### Defined in

[ModelInstance.ts:42](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/ModelInstance.ts#L42)

___

### getPureData

▸ **getPureData**(): `Object`

Clears all metronome-related data within the object and restores it to its raw state.

#### Returns

`Object`

raw data

#### Defined in

[ModelInstance.ts:52](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/ModelInstance.ts#L52)

___

### toJSON

▸ **toJSON**(): `string`

Converts the object to JSON

#### Returns

`string`

stringified object

#### Defined in

[ModelInstance.ts:61](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/ModelInstance.ts#L61)

___

### destroy

▸ **destroy**(): `Promise`<`boolean`\>

Destroy the object from Redis.

#### Returns

`Promise`<`boolean`\>

Returns true or false that it has been deleted.

#### Defined in

[ModelInstance.ts:69](https://github.com/saracalihan/metronom/blob/31dc5e2/lib/ModelInstance.ts#L69)
