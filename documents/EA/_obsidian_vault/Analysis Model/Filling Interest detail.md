---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1507681
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Filling Interest detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

System calls GetInterestAccountItemDetailRequest via AccountUIWS with parameter accountItemCode= value transactionSourceId of selected record in Interest grid. 

Than values from the response GetInterestAccountItemDetailResponse are put into grid Interest detail.

## 🔗 Connections (1)

- ← Dependency: [[12.611 Show interests (UseCase 1878577)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rule
- Custom: Tab - Interests
