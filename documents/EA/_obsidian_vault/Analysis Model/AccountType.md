---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821436
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 AccountType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing the data of some particular bank account (see the superior element for a detailed definition).

## 🔗 Connections (9)

- → Dependency: [[Get salesroom bank account for payments]]
- → Dependency: [[Get salesroom data]]
- → Dependency: [[Get partner data for selected salesroom]]
- → Dependency: [[Get salesroom data]]
- → Dependency: [[Get partner data for selected salesroom]]
- → Dependency: [[Get salesroom bank account for payments]]
- → Dependency: [[Get salesroom bank account for payments]]
- ← Dependency «use»: [[SellerType]]
- → Dependency: [[Get salesroom bank account for payments]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankCode | string |  |
| bankName | string |  |
| number | string |  |
| type | string |  |
| bankBranchCode | string |  |
| bankBranchName | string |  |
| holderName | string |  |
| bankBranchMICR | string |  |
