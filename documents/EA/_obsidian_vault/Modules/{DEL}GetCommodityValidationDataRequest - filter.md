---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1858689
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetCommodityValidationDataRequest - filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

//This algorithm finds commodity validation rules filtered according to input data from request of GetCommodityValidationData method of CommodityWS

Input:
- Request (GetCommodityValidationData) 

Output:
- set of Commodity validation rules which are active (archived = 0) and valid (valid from <= current date <= valid to)

Algorithm:
System finds concatenation of these rules:
 

	
- If Request.product is filled on input, system finds unique Commodity validation rules where CommodityValidationRule.CommodityValidationRuleCriteria.Type = PRODUCT and CommodityValidationRule.CommodityValidationRuleCriteria.Value = Request.product



	
- If Request.manufacturer is filled on input, system finds unique Commodity validation rules where CommodityValidationRule.CommodityValidationRuleCriteria.Type = MANUFACTURER and CommodityValidationRule.CommodityValidationRuleCriteria.Value = Request.manufacturer.



	
- If Request.commodityType is filled on input, system finds unique Commodity validation rules where CommodityValidationRule.CommodityValidationRuleCriteria.Type = COMMODITY_TYPE and CommodityValidationRule.CommodityValidationRuleCriteria.Value = Request.commodityType.



	
- If Request.commodityInsurance is filled on input, system finds unique Commodity validation rules where CommodityValidationRule.CommodityValidationRuleCriteria.Type = COMMODITY_INSURANCE and CommodityValidationRule.CommodityValidationRuleCriteria.Value = Request.commodityInsurance.



	
- {ADD PCG-1452}
If Request.financingPackage is filled on input, system finds unique Commodity validation rules where CommodityValidationRule.CommodityValidationRuleCriteria.Type = FINANCING_PACKAGE and CommodityValidationRule.CommodityValidationRuleCriteria.Value = Request.financingPackage.
{/ADD}



	
- For each Request parameter on input, system finds all unique Commodity validation rules where this parameter is null.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}01.698 Provide commodity validation data for external systems]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: {DEL}Manage commodity data from external systems
