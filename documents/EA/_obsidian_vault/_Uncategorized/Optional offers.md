---
type: GUIElement
stereotype: "label"
package: ""
domain: "_Uncategorized"
element_id: 1755518
diagrams: 0
connections: 0
tags:
  - guielement
  - _uncategorized
---

# 🖥️ Optional offers

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: N/A

## 📝 Notes

The displayed text differs based on the last performed scoring (minimum of all CONTRACT.SCORING.SCORING_RESULT.CREATION_DATEs):

	
- IF CONTRACT.SCORING.RESULT = 'APPROVED', then display: Optional new offers
	
- ELSE IF CONTRACT.SCORING.RESULT = 'REJECTED', then  display: New offers
