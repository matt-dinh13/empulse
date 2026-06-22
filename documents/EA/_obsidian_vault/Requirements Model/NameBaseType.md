---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878242
diagrams: 4
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 NameBaseType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object containing the base data of some particular person's name.

## 🔗 Connections (2)

- ← Dependency «use»: [[{MOD}AdditionalPersonType]]
- ← Generalization «XSDextension»: [[{MOD}NameType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: External Reference
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstName | string |  |
| middleName | string |  |
| lastName | string |  |
| name4 | string |  |
| name5 | string |  |
| name6 | string |  |
