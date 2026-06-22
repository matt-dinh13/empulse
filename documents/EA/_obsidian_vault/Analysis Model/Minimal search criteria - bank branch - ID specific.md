---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Validation rules"
domain: "Analysis Model"
element_id: 865726
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Minimal search criteria - bank branch - ID specific

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Validation rules

## 📝 Notes

User is able to start search only when at least one of following criteria is filled in:

	
- Bank name
	
- Bank code
	
- Bank branch name
	
- Primary bank branch code
	
- Secondary bank branch code
	
- Bank branch district


If validation fails, then message MSG_MINIMAL_SEARCH_CRITERIA_FOR_BANK_BRANCH_ERROR is displayed.

## 🔗 Connections (1)

- ← Dependency: [[Minimal search criteria for bank branch]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
