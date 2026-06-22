---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1734256
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Assign

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/User Interface

## 📝 Notes

{ADD PCG-3537}If GlobalParameter.SalesroomProductAssignmentUI (PCG_SAL_PROD_UI) = true then redirect to Product catalog/salesroom/{salesroomCode}
else {/ADD}
Activates 09.270 Assign product to salesroom 

Localization code: GEN_Assign

## 🔗 Connections (1)

- → Dependency: [[09.270 Assign product to salesroom (UseCase 1746868)]]

## 📊 Appears In (1 diagrams)

- Custom: tab Credit products
