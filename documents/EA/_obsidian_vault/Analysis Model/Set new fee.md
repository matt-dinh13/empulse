---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface"
domain: "Analysis Model"
element_id: 1746999
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Set new fee

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/User Interface

## 📝 Notes

Enables change amount of fee.

Enable:
Only if all the following conditions are fulfilled:
- CHDD_Fee was determined (i.e. appropriate Tariff -> Tariff Item [where related Tariff Item Type.Usage = DD] has been found in the controlling use case)
- the user has an access right 08.062 Create request for change due date - change fee.

Invokes screen Set new fee for change due date.

Localization code:
SER_SetNewFeeCHDDButton

## 🔗 Connections (1)

- → Association «navigate»: [[Set new fee for change due date]]

## 📊 Appears In (1 diagrams)

- Custom: Create request for Change due date
