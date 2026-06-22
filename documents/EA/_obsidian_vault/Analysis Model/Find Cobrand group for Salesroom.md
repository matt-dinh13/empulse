---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627473
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Find Cobrand group for Salesroom

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Input:

	
- Salesroom
	
- Date+time

Output:

	
- Cobrand group



	
- System searches for Cobrand group assigned to the Salesroom on Date+time.
	
- If found then return Cobrand group.
	
- System searches for Cobrand group assigned on Date+time to the Partner which Salesroom belongs to .
	
- If found then return Cobrand group.
	
- Else return empty Cobrand group.

## 📊 Appears In (1 diagrams)

- Custom: Get Salesroom Properties - business rules
