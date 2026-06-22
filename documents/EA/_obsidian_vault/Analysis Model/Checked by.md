---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model"
domain: "Analysis Model"
element_id: 1863749
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Checked by

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model

## 📝 Notes

Login of the operator who checked the document + '('  + date and time when the operator checked the document + ')'
Example: Yuen Nguyen (1/1/2013 13:50:52)

{ADD CSI-1122}If CLM Feature Flag.useDmsForSupplementRegistration = 1 and the panel is instantiated from Contract Supplement screen then,

	
- Source: *.attributes.value with code = "REGISTRATION_CHECK_BY" and *.attributes.value with code = "REGISTRATION_CHECK_DATE"

Else{/ADD}

	
- Source: Document.Checked_By + Document.Checked_Date


Read only

Localization code: CON_CheckedBy

## 📊 Appears In (1 diagrams)

- Custom: Document registration panel - User interface model
