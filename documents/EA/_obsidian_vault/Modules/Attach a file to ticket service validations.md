---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions"
domain: "Modules"
element_id: 1799341
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Attach a file to ticket service validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions

## 📝 Notes

System performs following validations:

	
- FileName validation
	
- FileSize validation
	
- Comment validation
	
- {ADD CLM-1944}Filename Extension validation{/ADD}

## 🔗 Connections (5)

- → Dependency: [[Comment validation]]
- → Dependency: [[FileName validation]]
- → Dependency: [[FileSize validation]]
- → Dependency: [[Filename Extension validation]]
- ← Dependency: [[10.072 Attach a file to ticket service]]

## 📊 Appears In (3 diagrams)

- Custom: Validation rules
- Logical: Ticketing - Attach a file to ticket API usage
- Use Case: Ticketing - Ticket management
