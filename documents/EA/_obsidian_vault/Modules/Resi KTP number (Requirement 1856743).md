---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Validation rules/ID"
domain: "Modules"
element_id: 1856743
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Resi KTP number

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Validation rules/ID

## 📝 Notes

Number of Resi KTP document must:

	
- be at least 15 characters
	
- contain "/"


	
- and no spaces are allowed.


If this is not true, warning is raised (MSG_INVALID_RESI_KTP_NUMBER).

## 🔗 Connections (1)

- ← Dependency: [[Resi KTP number (Action 1856749)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - ID
