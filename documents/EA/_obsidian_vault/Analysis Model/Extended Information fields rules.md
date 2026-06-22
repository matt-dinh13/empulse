---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Business Rules"
domain: "Analysis Model"
element_id: 1351222
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Extended Information fields rules

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Business Rules

## 📝 Notes

Input:
SearchResult from Validation rule filter for extended Information

Enterprise Category:

	
- if only one Enterprise Category exists the field is prefilled in dependency on SearchResult and disabled


If Enterprise Category is chosen then:

	
- field Investment Amount is displayed


	
- List of possible Investment Amount is restricted to chosen


If  Investment Amount is chosen then:

	
- List of possible Enterprise Subcategory is restricted to chosen


Field Enterprise Subcategory visibility is based on attribute Investment_Category.Investment_Allowed in dependency on selected Investment Amount. Value of attribute set to:

	
- TRUE -> field visible


	
- FALSE -> field is emptied and hidden

## 🔗 Connections (5)

- → Dependency: [[Validation rule filter for extended information]]
- ← Dependency: [[01.181 Collect data before sign (UseCase 1351141)]]
- ← Dependency: [[Enterprise Subcategory (GUIElement 1351149)]]
- ← Dependency: [[Enterprise Category (GUIElement 1351147)]]
- ← Dependency: [[Investment Amount]]

## 📊 Appears In (1 diagrams)

- Custom: IN
