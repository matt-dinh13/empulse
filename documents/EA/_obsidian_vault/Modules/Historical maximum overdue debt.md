---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877495
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Historical maximum overdue debt

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Actual debt=value Total Overdue Debt of last valid record in Debt Catalogue (DEBT_CATALOGUE.VALID_TO = null).

If  actual debt > value Maximum Overdue Debt In History in Debt Statistics of appropriate record of the contract then:

	
- set Debt Statistics.Maximum Overdue Debt In History= actual debt
	
- if no record in Debt Statistics exists for the contract, new one is created (each contract can have only one record).

## 📊 Appears In (1 diagrams)

- Custom: Debt statisctics calculation formulas
