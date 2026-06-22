---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864806
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Extract parts from ticket code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

{ADD CLM-1558 /}
Input - TicketCode  (TextCode_NumCode or TextCode_NumCode-NumSuffix)
Output - TextCode, NumCode, Suffix

Steps:

	
- system separates TicketCode to TextCode (part till "_") and NumCode (part after "_")
	
- if suffix separator ("-") exists in the NumCode then system separates NumCode to NumCode (part till "-") and Suffix (part after "-") else set Suffix as empty
	
- system returns TextCode, NumCode, Suffix

## 🔗 Connections (1)

- ← Dependency: [[10.052 Revise ticket manually]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
