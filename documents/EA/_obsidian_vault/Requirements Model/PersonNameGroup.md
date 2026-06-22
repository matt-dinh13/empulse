---
type: Class
stereotype: "XSDgroup"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878212
diagrams: 5
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 PersonNameGroup

> **Type**: Class · **Stereotype**: «XSDgroup»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object grouping the person name attributes .

## 🔗 Connections (3)

- → Aggregation: [[PersonFullNameType]]
- → Aggregation: [[PersonFullNameBaseType]]
- → Aggregation: [[PersonNameWithSuffixType]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstName | string |  |
| middleName | string |  |
| lastName | string |  |
