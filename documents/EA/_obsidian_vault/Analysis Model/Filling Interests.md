---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1507678
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Filling Interests

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

System calls GetAccountItemsRequest via AccountUIWS with parameters criteria.AccountItemSearchDto.accountNumber from Account detail and criteria.AccountItemSearchDto.TariffItemCategory = "INTEREST" and criteria.AccountItemSearchDto.isCancelled=false.

Than values from the response GetAccountItemsResponse are put into grid Interest.

## 🔗 Connections (1)

- ← Dependency: [[12.611 Show interests (UseCase 1878577)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rule
- Custom: Tab - Interests
