---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights"
domain: "Analysis Model"
element_id: 1862017
diagrams: 4
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}01.588 - Get DDM Data Exchange ID

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights

## 📝 Notes

{ADD PAYM-1844 CBL-1541 /}
This technical use case describes processing of behavior of getting information about retrieving DDM by its Data Exchange ID

## 🔗 Connections (3)

- ← Dependency «invoke»: [[DirectDebitService (Interface 1699813)]]
- → Realisation: [[{ADD}01.588 - Get DDM Data Exchange ID]]
- ← UseCase: [[BSL (Actor 1880871)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Logical: DirectDebitService.getDDMByDataExchangeID
- Use Case: DDM via WS
