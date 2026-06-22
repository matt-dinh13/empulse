---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/User Interface Model/Create request for loan restructuring (step 2)"
domain: "Analysis Model"
element_id: 1089127
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Remaining terms

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/User Interface Model/Create request for loan restructuring (step 2)

## 📝 Notes

Remaining number of standard installments to repay (still unpaid or partially paid only)
LDM: value calculated  as Contract.Financial Parameters.Term - (Installment.Installment Number having Installment_Parts.Fully Paid Date not NULL and Installment.Installment_Type = ‘STANDARD’ and Active Flag = 1)

Localization code: SER_CountOfRemainingTerms

## 📊 Appears In (1 diagrams)

- Custom: Create request for loan restructuring (step 2)
