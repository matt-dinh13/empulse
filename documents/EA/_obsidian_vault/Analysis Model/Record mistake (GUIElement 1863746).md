---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model"
domain: "Analysis Model"
element_id: 1863746
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Record mistake

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model

## 📝 Notes

Button for recording document mistake
It runs 01.280 Record document mistake v2 with parameters: 
{ADD CSI-1122}If CLM Feature Flag.useDmsForSupplementRegistration = 1 and the panel is instantiated from Contract Supplement screen then,

	
- *.uuid, *.typeCode, Contract.Contract Code

Else{/ADD}

	
- Document.Uuid, Document.Type Code, Contract.Contract Code


Localization code: CON_RecordMistake

## 🔗 Connections (1)

- → Dependency: [[{MOD}01.280 Record document mistake v2]]

## 📊 Appears In (1 diagrams)

- Custom: Document registration panel - User interface model
