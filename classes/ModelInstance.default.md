[ModelInstance](../modules/ModelInstance).default

ModelInstance Class

## Indexable

▪ [index: `string`]: `any`

## Table of contents

### Properties

- [\_Model](./ModelInstance.default#_model)

### Constructors

- [constructor](./ModelInstance.default#constructor)

### Methods

- [save](./ModelInstance.default#save)
- [getPureData](./ModelInstance.default#getpuredata)
- [toJSON](./ModelInstance.default#tojson)

## Properties

### \_Model

• **\_Model**: `ModelFields`

#### Defined in

ModelInstance.ts:23

## Constructors

### constructor

• **new default**(`data`, `model`, `dataInfo`)

Represents an object produced from Metronom ORM Model

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | Lead data |
| `model` | [`default`](./Model.default) | Parent model to generate object |
| `dataInfo` | [`DataInfo`](../interfaces/ModelInstance.DataInfo) | The place where redis information about the record is kept. |

## Methods

### save

▸ **save**(): `Promise`<`void`\>

Saves the current state of the object to Redis.

#### Returns

`Promise`<`void`\>

___

### getPureData

▸ **getPureData**(): `Object`

Clears all metronome-related data within the object and restores it to its raw state.

#### Returns

`Object`

raw data

___

### toJSON

▸ **toJSON**(): `string`

Converts the object to JSON

#### Returns

`string`

stringified object
