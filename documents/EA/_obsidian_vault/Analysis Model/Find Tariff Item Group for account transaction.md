---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Business rules"
domain: "Analysis Model"
element_id: 1265765
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Find Tariff Item Group for account transaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Business rules

## 📝 Notes

Input:

	
- Product Type
	
- Transaction Subtype
	
- Transaction Date+time
	
- Salesroom where transaction is processed

Output:

	
- Tariff Item Group (TIG)



	
- System searches for Cobrand group by the rule Find Cobrand group for Salesroom with parameters
- Salesroom where transaction is processed
- Transaction Date+time
	
- If not found then system searches for Cobrand group = 'NDF' in the following step.
	
- System searches for TIG in Transaction To Tariff Item Group mapping by
- Product Type
- Transaction Subtype
- Cobrand group
	
- If found then 
- system returns TIG
else
- system returns empty TIG.

## 🔗 Connections (1)

- ← Dependency: [[Initial transaction creation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
