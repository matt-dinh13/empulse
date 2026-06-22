---
type: GUIElement
stereotype: "label"
package: ""
domain: "_Uncategorized"
element_id: 1755519
diagrams: 0
connections: 0
tags:
  - guielement
  - _uncategorized
---

# 🖥️ Current offer

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: N/A

## 📝 Notes

The displayed text differs based on the last performed scoring (minimum of all CONTRACT.SCORING.SCORING_RESULT.CREATION_DATEs):

	
- IF CONTRACT.SCORING.RESULT = 'APPROVED' AND CONTRACT.STATUS = 'In pre-process', then display: Pre-approved offer
	
- ELSE IF CONTRACT.SCORING.RESULT = 'APPROVED' AND CONTRACT.STATUS = 'In process', then display: Approved offer
	
- ELSE IF CONTRACT.SCORING.RESULT = 'REJECTED', then  display: Rejected offer
