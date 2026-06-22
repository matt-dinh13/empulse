---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case"
domain: "Analysis Model"
element_id: 1746890
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Algorithm: Find salesrooms by product code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case

## 📝 Notes

{DEL PCG-3992/}
Input:
product code

Output:
list of salesroom codes and names

Algorithm:

If BL_USE_SALES_PACKAGE = FALSE then:

System finds all salesrooms where product is assigned on according to these rules:

	
- Salesroom must be active
	
- Product must be active
	
- Product must be valid (current date is in interval <valid from, valid to>)
	
- Product assignment on salesroom must be valid (current date is in interval <valid from, valid to>)


If BL_USE_SALES_PACKAGE = TRUE then:

System finds all salesrooms with sales package where product is assigned on according to these rules:

	
- Salesroom must be active
	
- Product must be active
	
- Sales package must be active
	
- Product must be valid (current date is in interval <valid from, valid to>)
	
- Product assignment on sales package must be valid (current date is in interval <valid from, valid to>)


	
- Sales package assignment on salesroom must be valid (current date is in interval <valid from, valid to>)

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.273 Get List of Salesrooms by product code]]

## 📊 Appears In (1 diagrams)

- Use Case: Get List of Salesrooms by product code
