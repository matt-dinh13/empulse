---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753468
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Find corresponding DD statement

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

- Find DD statement satisfying following conditions:

	
- status (DIRECT_DEBIT_STATEMENT.STATUS) is “Posted” or "Debited" or "Undebited"
	
- due date (DIRECT_DEBIT_STATEMENT.DUE_DATE) is same as value of XML element dueDate 
	
- amount (DIRECT_DEBIT_STATEMENT.AMOUNT) is same as value of XML element amount 
	
- associated DD mandate belongs to DDM with code (DD_STATEMENT.DDM.CODE) same as value of XML element reference

## 🔗 Connections (1)

- ← Dependency: [[Update DD statements status]]

## 📊 Appears In (2 diagrams)

- Use Case: Automatic import DD statements and confirmations
- Use Case: Direct Debit statements
