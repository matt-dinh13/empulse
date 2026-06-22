---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules"
domain: "Analysis Model"
element_id: 1441252
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 ValidFrom-ValidTo of Insurance program

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules

## 📝 Notes

Validations:

	
- Valid From is mandatory (MSG_5040, e. g. Mandatory field {0} is empty!)
	
- Valid From >= TODAY if does not exist active version of the same program (MSG_InsProgValidFromTODAY)
	
- Valid To >= Valid From or empty (MSG_InsProgValidFromValidTo)

## 🔗 Connections (2)

- ← Dependency: [[Valid to (GUIElement 1516806)]]
- ← Dependency: [[Valid from]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
