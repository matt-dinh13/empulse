---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821442
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}FinancialType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing the financial (financial situation) data of some particular client.

## 🔗 Connections (9)

- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[ClientPossetionTypeList]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Association: [[Additional Person]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency: [[Get application payment channel]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}occupationIncome | MoneyType |  |
| {MOD}otherIncome | MoneyType |  |
| {MOD}otherDebts | MoneyType |  |
| {MOD}householdIncome | MoneyType |  |
| householdExpenses | MoneyType |  |
| financialSituation | string |  |
| mainSourceOfIncome | string |  |
| clientPossessions | ClientPossetionTypeList |  |
