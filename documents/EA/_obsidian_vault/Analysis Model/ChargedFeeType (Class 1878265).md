---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878265
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ChargedFeeType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Entity with fees charged to contract.

## 🔗 Connections (3)

- ← Dependency «use»: [[ChargedFeeTypeItems (Class 1878221)]]
- → Dependency «use»: [[GoodsAndServicesTaxItem]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyType |  |
| feeType | string |  |
| usage | string |  |
| name | string |  |
| gstItem | GoodsAndServicesTaxItem |  |
