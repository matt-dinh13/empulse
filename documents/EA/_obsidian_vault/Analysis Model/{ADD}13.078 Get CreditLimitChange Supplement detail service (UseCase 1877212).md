---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights"
domain: "Analysis Model"
element_id: 1877212
diagrams: 3
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.078 Get CreditLimitChange Supplement detail service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Access Rights

## 📝 Notes

The use case presents a service for getting of an CreditLimitChange Request detail based on provided request Id

Example of the request: GET <bsl_env>/bsl/api/v1/credit-limit-change-supplement/<supplementId>

## 🔗 Connections (3)

- ← Dependency: [[CreditLimitChangeSupplements (Interface 1862861)]]
- → Realisation: [[{ADD}13.078 Get CreditLimitChange Supplement detail service]]
- → Realisation: [[13.106 Get ALOP Request detail service]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
- Logical: CreditLimitChangeSupplements - Get supplement
