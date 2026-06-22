---
type: GUIElement
stereotype: "combo"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model"
domain: "Modules"
element_id: 1596892
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Salesroom

> **Type**: GUIElement · **Stereotype**: «combo»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/User Interface Model

## 📝 Notes

A list of insurance partners
The List source: result of call HomeSys component -> GET .../homesis/restful/clm/salesrooms?partnerType=IC
LDM: InsuranceProgram.Partner -> SalesroomCode + SalesroomName

Localization code: INSR_InsSalesroom

## 📊 Appears In (1 diagrams)

- Custom: Set main Insurance Program properties
