---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1878995
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}SearchCommodityDataRequest - filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

{DEL PCG-3924/}
//This algorithm finds commodity data filtered according to criteria from request of SearchCommodityData method of CommodityWS

Input:
- Request (SearchCommodityDataRequest) 

Output:
- set of Commodity data filtered according to search criteria

Algorithm:
System finds intersection of Commodities according to these rules:

	
- If Request.SearchCriterium.criterium = SERIAL_NUMBER, system finds all Commodity data where Commodity.SerialNumber = Request.SearchCriterium.value.


	
- If Request.SearchCriterium.criterium = ENGINE_NUMBER, system finds all Commodity data where Commodity.EngineNumber = Request.SearchCriterium.value.


	
- If Request.SearchCriterium.criterium = IMEI, system finds all Commodity data where Commodity.IMEI = Request.SearchCriterium.value.


	
- If Request.SearchCriterium.criterium = SKU, system finds all Commodity data where Commodity.SKU = Request.SearchCriterium.value.


	
- If Request.SearchCriterium.criterium = MSISDN, system finds all Commodity data where Commodity.MSISDN = Request.SearchCriterium.value.
	
- {ADD PCG-1753}If Request.SearchCriterium.criterium = IMEI_OR_SN_MANDATORY, system finds all Commodity data where Commodity.IMEI = Request.SearchCriterium.value or Commodity.SERIAL_NUMBER = Request.SearchCriterium.value.{/ADD}



Note:
Request.SearchCriterium.value can contain wildcards (*, ?) and search algorithm can use them.
* - represents zero, one or multiple characters
? - represents a single character

## 🔗 Connections (1)

- ← Dependency: [[{DEL}01.696 Search commodity data from external systems]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: {DEL}Manage commodity data from external systems
