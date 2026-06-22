---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail"
domain: "Analysis Model"
element_id: 1716635
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Origin System

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Communication detail

## 📝 Notes

System where communication event was created.
Read only

Localization code:
GEN_SystemName

DB Source:
If it's communication record stored in BSL DB, then "BSL" is shown. In other cases is displayed name returned by OIF which returned this communication record.

{ADD CLM-4840}LDM:

	
- CLC System: 'CLC'
	
- External System: Communication Item -> MUID.System{/ADD}

## 📊 Appears In (1 diagrams)

- Custom: Show communication record
