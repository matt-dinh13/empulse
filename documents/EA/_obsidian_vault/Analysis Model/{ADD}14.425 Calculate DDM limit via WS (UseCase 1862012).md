---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights"
domain: "Analysis Model"
element_id: 1862012
diagrams: 4
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}14.425 Calculate DDM limit via WS

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights

## 📝 Notes

{ADD PAYM-1844 CBL-1541 /}
This is technical UC to calculate DDM limit from passed data (data from financial parameters) via WS.
It is used for instance if AF needs to show DDM Limit on 1st BoD.

## 🔗 Connections (4)

- ← Dependency «invoke»: [[DirectDebitService (Interface 1699813)]]
- → Dependency: [[{ADD}Algorithm_ Calculate DDM limit from parameters]]
- → Realisation: [[{ADD}14.425 Calculate DDM limit via WS]]
- ← UseCase: [[BSL (Actor 1880871)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Logical: DirectDebitService.calculateDDMLimit
- Use Case: DDM via WS
