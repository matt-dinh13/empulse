---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821444
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 RefinancingDataType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing the basic refinancing/consolidation data of some particular application/contract.

## 🔗 Connections (4)

- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[{MOD}RefinancedContractType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| disbursementAmount | MoneyType |  |
| totalRefinancedAmount | MoneyType |  |
| refinancedContracts | RefinancedContractType |  |
