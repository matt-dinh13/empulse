---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822347
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contact type icon rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

Currently there are three contract types: revolving, cash and consumer loan. Each of them will have its own symbol which will represent a given type of contract, this allows users easily distinguish between them:

	
- Contract.Contract_Type = REL - card symbol
	
- Contract.Contract_Type = CEL and Contract->(Offer_)Financial_Parameters.Initial_Transaction_Type = CASH  - bag of money symbol 


	
- Contract->(Offer_)Financial_Parameters.Initial_Transaction_Type = POS - washing machine symbol

## 🔗 Connections (1)

- ← Dependency: [[Extended Custom Search]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
