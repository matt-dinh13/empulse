---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1734201
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Assign

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface

## 📝 Notes

{ADD PCG-3537}If GlobalParameter.SalesroomProductAssignmentUI (PCG_SAL_PROD_UI) = true then redirect to Product catalog/salesroom/{salesroomCode}
else {/ADD}
Activates UC 09.276 Assign sales package to salesroom 

Localization code: GEN_Assign

## 🔗 Connections (1)

- → Realisation: [[{ADD}09.276 Assign sales package to salesroom (UseCase 1274812)]]

## 📊 Appears In (1 diagrams)

- Custom: tab Sales Packages
