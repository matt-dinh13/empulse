---
type: GUIElement
stereotype: "combobox"
package: ""
domain: "_Uncategorized"
element_id: 1873904
diagrams: 0
connections: 0
tags:
  - guielement
  - _uncategorized
---

# 🖥️ {ADD}Target type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: N/A

## 📝 Notes

{ADD PAYM-5205}
Target type of the disbursement method (i.e. party receiving the money disbursement).
 

	
- Displayed only when parameter enableDisbursementTargetTypeOnApplicationDetail = TRUE


	
- Enumeration values are taken from setting on salesroom (according to the rule Get allowed disbursement methods for application).
	
- Based on setting:
- if there is no value, the field is hidden
- If there is only one value available for selected disbursement method, then its value is automatically pre-selected and field is disabled
- If there are more than one value available for selected disbursement method, then field is empty by default (when no value is available on the respective payment channel yet).


LDM:
//LDM source for field pre-filling
Contract->Payment_Channel[.Purpose='DI'].TargetType
//LDM for value saving
API createDraft[.purpose='DI'].targetType/ 
patchDraft[.purpose='DI'].targetType
