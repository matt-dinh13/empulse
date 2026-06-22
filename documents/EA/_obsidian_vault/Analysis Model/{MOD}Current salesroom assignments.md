---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/User Interface"
domain: "Analysis Model"
element_id: 1268429
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Current salesroom assignments

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/User Interface

## 📝 Notes

{ADD PCG-822_18}Renamed from Current product assignments to Current salesroom assignments{/ADD}

Filter for list of {DEL PCG-822_18}products{/DEL}{ADD PCG-822_18}items{/ADD} assigned to salesroom (grids Products on Salesroom and Services on Salesroom).

If checked, {DEL PCG-822_18}product{/DEL}{ADD PCG-822_18}item{/ADD} assignments where current date+time is out of interval <ValidFrom, ValidTo> are hidden.  Else all {DEL PCG-822_18}product{/DEL}{ADD PCG-822_18}item{/ADD} assignments are displayed.

Default value = TRUE.

Localization code: {DEL PCG-822_18}GEN_FilterCreditProducts{/DEL}{ADD PCG-822_18}GEN_FilterSalesroomAssignments{/ADD}

## 📊 Appears In (1 diagrams)

- Custom: Salesroom Assignment View
