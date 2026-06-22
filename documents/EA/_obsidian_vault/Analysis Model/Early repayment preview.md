---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/User Interface"
domain: "Analysis Model"
element_id: 1586757
diagrams: 2
connections: 8
tags:
  - screen
  - analysis-model
---

# 📱 Early repayment preview

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/User Interface

## 📝 Notes

Form for displaying result of early repayment calculation
Localization code:
it is determined by the ServiceType:
- for COP is used SER_NewCOPRequest
- for FER is used SER_NewFERRequest
- for CET is used SER_CETPreview

## 🔗 Connections (5)

- → NoteLink: [[ER request preview _ Early repayment preview]]
- → Realisation: [[08.270 Show CET repayment preview (UseCase 1862238)]]
- → Realisation: [[03.220 Show REL early repayment preview]]
- → Realisation: [[08.255 Show Cooling-off period repayment preview (UseCase 1862255)]]
- → Realisation: [[03.035 Show early repayment preview (UseCase 1879635)]]

## 📊 Appears In (2 diagrams)

- Custom: COP Early repayment preview
- Custom: Early repayment preview
