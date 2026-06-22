---
type: GUIElement
stereotype: "form"
package: ""
domain: "_Uncategorized"
element_id: 1873913
diagrams: 0
connections: 0
tags:
  - guielement
  - _uncategorized
---

# 🖥️ {ADD}Beneficiary address

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: N/A

## 📝 Notes

{ADD PAYM-5205}
Panel displayed only if field Target type = BENEFICIARY_PERSON or BENEFICIARY_COMPANY

LDM:
applicant->relatedPersonInfos->postalAddresses(classification=CONTACT).*
related person is type = OTHER and custom value beneficiaryPersonYn=true
