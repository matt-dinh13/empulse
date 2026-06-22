---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1857013
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Total deliquent amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

## 📝 Notes

Mandatory: No
Editable: No

Total delinquent amount of client. Sum of differences of amounts which were expected and amounts which were paid by client (INSTALLMENT_PART.AMOUNT – INSTALLMENT_PART.ANOUNT_PAID) over all not-archived installment parts (INSTALLMENT_PART.ARCHIVED = false) with due date (INSTALLMENT.DUE_DATE) older than system date.

Localization code: INS_TotalDeliquentAmount

## 📊 Appears In (1 diagrams)

- Custom: Installment schedule
