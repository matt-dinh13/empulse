---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application commodities"
domain: "Analysis Model"
element_id: 1721807
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Search application commodity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application commodities

## 📝 Notes

This object describes the steps, how system searches for commodities using various search criteria.

Input:

	
- Array of following information-pairs [1..n]:
   - SearchCriterionType = type of the commodity search criterion
   - SearchCriterionValue = value of the commodity search criterion


Output:
- Commodity [0..n] = object of respective found commodity
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps


Steps:

	
- System takes each pair of SearchCriterionType and SearchCriterionValue from the input and uses them for searching the corresponding commodities as follows:
   System calls the respective REST API provided by the Commodity module (i.e. GET Commodities) with following input parameters:
        - engineNumber = SearchCriterionValue for SearchCriterionType 'ENGINE_NUMBER'
        - imei = SearchCriterionValue for SearchCriterionType 'IMEI'
        - msisdn = SearchCriterionValue for SearchCriterionType 'MSISDN'
        - serialNumber = SearchCriterionValue for SearchCriterionType 'SERIAL_NUMBER'
        - sku = SearchCriterionValue for SearchCriterionType 'SKU'

	
- If calling the service fails due to any reason, algorithm ends with respective ErrorCode returned on the output.
	
- System takes each received  Commodity from the response and returns them to the calling object. Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[Validate IMEI internally]]
- ← Dependency: [[VIN code]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application commodities
