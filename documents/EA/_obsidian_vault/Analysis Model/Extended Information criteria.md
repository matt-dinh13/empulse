---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Business Rules"
domain: "Analysis Model"
element_id: 1351221
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Extended Information criteria

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Business Rules

## 📝 Notes

Input:
- Product - code of product (on which the Contract is based on)
- ClientSnapshot - for which Contract is created

Extended Information criteria rule is met if all criteria below are satisfied:

	
- PRODUCT.UsableForPSL = TRUE
	
- and minimun one SearchResult is found according to Validation rule filter for extended informations

## 🔗 Connections (2)

- → Dependency: [[Validation rule filter for extended information]]
- ← Dependency: [[01.181 Collect data before sign (UseCase 1351141)]]

## 📊 Appears In (1 diagrams)

- Custom: IN
