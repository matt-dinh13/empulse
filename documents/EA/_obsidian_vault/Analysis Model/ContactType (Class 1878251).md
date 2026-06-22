---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878251
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContactType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing the data of some particular contact.

## 🔗 Connections (3)

- ← Dependency «use»: [[{MOD}AdditionalPersonType]]
- ← Generalization «XSDextension»: [[EmploymentContactType]]
- ← Dependency «use»: [[ContactsType (Class 1878240)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| value | string |  |
| description | string |  |
