---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822343
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get system contract search criteria based on configuration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

{ADD CLM-3352/}
Function returns system contract search criteria for requested filter.

Input:

	
- Filter code


Output:

	
- Criteria and its value


Steps:

	
- System select criteriaCode, value from Contract search criteria configuration where filterCode = Input.Filter code.
	
- System returns selection.

## 🔗 Connections (3)

- ← Dependency: [[{ADD}CRM Search criteria restriction]]
- ← Realisation «Get system criteria»: [[Contract search filter]]
- ← Dependency: [[{MOD}Contract search filter]]

## 📊 Appears In (5 diagrams)

- Custom: Business rules
- Custom: REQ #1 - Implement configurable contract search system crieria
- Custom: REQ #2 - Implement BO Limited Search
- Custom: REQ #3 - Implement CRM Search
- Use Case: Contract search
