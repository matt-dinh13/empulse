---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870131
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Determine Sales Quote Processing type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule presents a configuration which determines type of Sales Quote processing on the Contract Supplement based on Sales Quote type.

Input:

	
- SalesQuoteType


Output:

	
- SalesQuoteProcessingType


Get SalesQuoteType

	
- Case {param1, param2} then SalesQuoteProcessingType = 'SERVICE'
	
- Case {param3, param4} then SalesQuoteProcessingType = 'TRANSACTION'

Return SalesQuoteProcessingType

## 🔗 Connections (1)

- ← Dependency: [[13.020 Add Sales Quote to Contract Supplement]]

## 📊 Appears In (1 diagrams)

- Use Case: Add Sales Quote to Contract Supplement - Use Case Model
