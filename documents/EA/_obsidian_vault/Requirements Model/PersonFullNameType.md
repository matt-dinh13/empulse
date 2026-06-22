---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878217
diagrams: 4
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 PersonFullNameType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object containing the data of a person's full name.

## 🔗 Connections (5)

- ← Dependency «use»: [[SellerType]]
- ← Dependency «use»: [[{MOD}PersonalDetailsType]]
- ← Aggregation: [[PersonNameSuffixGroup]]
- ← Aggregation: [[PersonNameGroup]]
- ← Aggregation: [[AdditionalNameGroup]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| nickName | string |  |
| mothersName | string |  |
