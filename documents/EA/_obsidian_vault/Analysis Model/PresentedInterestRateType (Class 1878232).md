---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878232
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PresentedInterestRateType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Entity with list of presented interest rates for contract.
Data for Contract are generated according to the rule List of Presented IR for target = Printout.

## 🔗 Connections (4)

- ← Dependency: [[{ADD}PresentedInterestRateTypeItems]]
- ← Dependency «use»: [[{MOD} PresentedInterestRateTypeItems]]
- → Dependency: [[List of Presented IR]]
- → Dependency «use»: [[InterestRateType]]

## 📊 Appears In (4 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES
- Logical: HO_PRODUCT_OFFER_DETAIL
- Logical: HO_SERVICE_REQUEST_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| case | string |  |
| name | string |  |
| rate | InterestRateType |  |
| order | int |  |
