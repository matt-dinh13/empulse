---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules"
domain: "Analysis Model"
element_id: 1441249
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance contract code parameters cross validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules

## 📝 Notes

Validations:

	
- If Contract numbering = FIXED then Fixed contract number is mandatory (MSG_InsProgFixedContractNum)
	
- If Contract numbering = INHERITED then at least one value of Contract number prefix or Contract number suffix is mandatory 
	
- (MSG_InsProgInheritedContractNum)

## 🔗 Connections (4)

- ← Dependency: [[Contract number prefix (GUIElement 1516811)]]
- ← Dependency: [[Fixed contract number (GUIElement 1516803)]]
- ← Dependency: [[Contract numbering (GUIElement 1516743)]]
- ← Dependency: [[Contract number suffix]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
