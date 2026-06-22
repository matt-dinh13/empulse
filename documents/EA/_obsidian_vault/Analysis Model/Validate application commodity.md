---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application commodities"
domain: "Analysis Model"
element_id: 1721805
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Validate application commodity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application commodities

## 📝 Notes

This object describes the steps, how system validates the data of selected commodity (or multiple commodities) against the defined validation rules.

Input:
Array of following information-sets [1..n]:
   - CommodityID = unique identifier of the commodity
   - EventType = type of the event to be used for the commodity validation

Steps:

	
- System takes each CommodityID from the input and validates the data of corresponding commodity as follows:
   System calls the respective REST API provided by the Commodity module (i.e. POST Commodities-Validation) with following input parameters:
        - commodityCode = CommodityID 
        - salesroomCode = latest Contract_2_Commodity[.Commodity_ID=CommodityID]->Contract->Business_Event[.Type in ('CHOOSE_OFFER', 'SUBMIT_OFFER')].Salesroom_Code //Where the Salesroom_Code is not null.
        - validationParameters.*
           - eventType = EventType
           - [financingPackgeCode, insuranceServiceCode, productCode] = filled according to the rule Get validation parameters for commodity data update with Contract_2_Commodity[.Commodity_ID=CommodityID]->Contract.Code as ContractCode and CommodityID on the input  
	
- Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}01.655 Validate contract Commodity]]
- ← Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application commodities
