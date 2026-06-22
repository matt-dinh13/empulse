---
type: Requirement
stereotype: "Functionality"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Business Rules/IN"
domain: "Analysis Model"
element_id: 1465144
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 At least one search criteria has to be filled in

> **Type**: Requirement · **Stereotype**: «Functionality»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Business Rules/IN

## 📝 Notes

This rule defines minimal groups of search criteria. At least one group must be entered for search to start:

	
- CUID
	
- (Document number and Document type)


For each used group user must enter all required fields. 
If no input criteria is inserted, then error MSG_0012 will be displayed to user. 

These are default rules.

## 📊 Appears In (2 diagrams)

- Custom: Business rules - IN
- Custom: Product business rules
