---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_DIRECT_DEBIT_MANDATE_FORM"
domain: "Analysis Model"
element_id: 1821008
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 AddressType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_DIRECT_DEBIT_MANDATE_FORM

## 📝 Notes

Object containing the data of some particular address.

## 🔗 Connections (6)

- → Dependency: [[{ADD}Get boundary item from CSD]]
- ← Dependency «use»: [[AddressesType]]
- → Dependency: [[{ADD}Get boundary item from CSD]]
- → Dependency: [[{ADD}Get boundary item from CSD]]
- → Dependency: [[{ADD}Get boundary item from CSD]]
- → Dependency: [[{ADD}Get boundary extension item from CSD]]

## 📊 Appears In (1 diagrams)

- Logical: HO_DIRECT_DEBIT_MANDATE_FORM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| houseNumber | string |  |
| district | string |  |
| street | string |  |
| subDistrict | string |  |
| block | string |  |
| town | string |  |
| zipCode | string |  |
| flat | string |  |
