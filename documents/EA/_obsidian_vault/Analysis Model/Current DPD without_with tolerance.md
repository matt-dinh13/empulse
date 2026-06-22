---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1857015
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Current DPD without/with tolerance

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

## 📝 Notes

Mandatory: No
Editable: No

DPD without tolerance:
Maximum of days past due of client. Maximum difference between expected due date (INSTALLMENT.DUE_DATE) of installments (INSTALLMENT) which have not fully paid parts (INSTALLMENT_PART.AMOUNT – INSTALLMENT_PART.AMOUNT_PAID > 0) and current date.

DPD with tolerance:
Maximum of days past due of client which takes debt tolerance into account. 
Maximum difference between expected due date (INSTALLMENT.DUE_DATE) of installments (INSTALLMENT) which have not fully paid parts with debt tolerance (INSTALLMENT_PART.AMOUNT – INSTALLMENT_PART.AMOUNT_PAID > ParamDebtToleranceAmount ({ADD IS-2528}{IN only} or DebtToleranceAmountLastInst in case of the last contract installment{/ADD}) and current date.

Localization code: INS_DPDCurrent

## 📊 Appears In (1 diagrams)

- Custom: Installment schedule
