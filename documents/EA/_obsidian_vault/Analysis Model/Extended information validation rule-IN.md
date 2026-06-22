---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN"
domain: "Analysis Model"
element_id: 1819505
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Extended information validation rule-IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN

## 📝 Notes

- For key = Investment_Amount the value must be InvestmentAmount.code
	
- For key = Investment_Category the value must be valid according to aggregation between enumerations InvestmentCategory and InvestmentAmount
	
- For key = Enterprise_Category the value must be valid according to SearchResult from Validation rule filter for extended Information and aggregation between enumerations InvestmentAmount and EnterpriseCategory
	
- For key = Enterprise_Subcategory the value must be filled in if Investment_Category.Investment_Allowed=TRUE and valid according to aggregation between enumerations EnterpriseSubcategory and EnterpriseCategory


If the user adds invalid data combination then message MSG_Invalid_Extended_Information will appear.

## 🔗 Connections (2)

- → Dependency: [[Validation rule filter for extended information]]
- ← Dependency: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - IN
