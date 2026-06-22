---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Business Rules"
domain: "Analysis Model"
element_id: 1747074
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Access control of document functionality by application status

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Business Rules

## 📝 Notes

Entry condition A: User has basic access right
Entry condition B: User has specific access right (for particular contract statuses)
Entry condition C: Contract is in status that is defined in specific right
 

	
- If A = False then document is not accessible
	
- If A = True AND B = False then document is not accessible
	
- If A = True AND B = True AND C = False then document is not accessible


	
- If A = True AND B = True AND C = True then document is accessible

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
