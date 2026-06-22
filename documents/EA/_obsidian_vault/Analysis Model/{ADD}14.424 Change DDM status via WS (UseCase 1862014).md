---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights"
domain: "Analysis Model"
element_id: 1862014
diagrams: 6
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}14.424 Change DDM status via WS

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights

## 📝 Notes

{ADD CBL-2505 PAYM-1072 /}
This is a technical UC for processing incoming request via WS on change DDM status. 
The system checks, that the sequence of the statuses is preserved

## 🔗 Connections (4)

- ← Dependency «invokes»: [[DirectDebitService (Interface 1699813)]]
- → Realisation: [[Requirement3 - E-mandate DDM status update via Web Service]]
- → Realisation: [[{ADD}14.424 Change DDM status via WS]]
- ← UseCase: [[BSL (Actor 1880871)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: PAYM-1072 (CBL-2505) - HoSel e-mandate support - reporting and maintenance
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Logical: DirectDebitService
- Logical: DirectDebitService.changeDDMStatus
- Use Case: DDM via WS
