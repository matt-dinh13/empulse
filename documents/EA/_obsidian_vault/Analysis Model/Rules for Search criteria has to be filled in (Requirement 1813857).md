---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients/IN"
domain: "Analysis Model"
element_id: 1813857
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Rules for Search criteria has to be filled in 

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients/IN

## 📝 Notes

This rule defines minimal groups of search criteria. At least one group must be entered for search to start.

	
- Kazakhstan - Search criteria rule for KZ
	
- Philippines - Search criteria rule for PH


If country specific rules do not exists, Default rules are applied:
1. Application/Contract number 
2. CUID 
3. (Client’s surname and Birth date) or  (Client’s first name and Birth date) 
4. (Document number and Document type)
5. Contact type and Contact

Note: for each used group user must enter all required fields. If not, system displays MSG_ClientSearchCriteria

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Search criteria - Default]]
- ← Dependency: [[Search criteria - IN]]
- ← Generalization: [[{MOD}Search criteria rule for PH (Requirement 1813860)]]
- ← Generalization: [[Search criteria rule for KZ (Requirement 1813861)]]

## 📊 Appears In (3 diagrams)

- Custom: IN
- Custom: Search clients
- Custom: Search criteria - Default
