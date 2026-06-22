---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/PH/Generic"
domain: "Modules"
element_id: 1638074
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Date Issued

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/PH/Generic

## 📝 Notes

Validation: 

	
- Optional.
	
- Unified PH date  format MMDDYYYY
	
- Date issued <= current date
	
- MM in interval 01-12
	
- DD in interval 01-31
	
- First two digits in YYYY are 19 or 20
	
- Date issued + 1 year >= current day

## 🔗 Connections (1)

- ← Dependency: [[NBI Clereance (Action 1638082)]]

## 📊 Appears In (1 diagrams)

- Custom: Generic documents
