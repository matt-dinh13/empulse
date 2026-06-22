---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID"
domain: "Analysis Model"
element_id: 1604559
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Resi KTP number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Validation rules/ID

## 📝 Notes

Number of Resi KTP document must:

	
- be at least 15 characters
	
- contain "/"


	
- and no spaces are allowed.


If this is not true, warning is raised (MSG_INVALID_RESI_KTP_NUMBER).

## 🔗 Connections (1)

- ← Dependency: [[Resi KTP number (Action 1604565)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - ID
