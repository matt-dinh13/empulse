---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Business Rules"
domain: "Modules"
element_id: 1799871
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Rules for Search criteria has to be filled in 

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Business Rules

## 📝 Notes

This rule defines minimal groups of search criteria. At least one group must be entered for search to start.

	
- Kazakhstan - Search criteria rule for KZ
	
- Philippines - {MOD}Search criteria rule for PH


If country specific rules do not exists, Default rules are applied:
1. Application/Contract number 
2. CUID 
3. (Client’s surname and Birth date) or  (Client’s first name and Birth date) 
4. (Document number and Document type)
5. Contact type and Contact

Note: for each used group user must enter all required fields. If not, system displays MSG_ClientSearchCriteria

## 🔗 Connections (4)

- ← Generalization: [[Search criteria rule for KZ]]
- ← Generalization: [[{MOD}Search criteria rule for PH]]
- ← Dependency: [[{MOD}Search criteria - Default (GUIElement 1799872)]]
- ← Dependency: [[Search criteria - IN (GUIElement 1799874)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: IN
- Custom: Search criteria - Default
