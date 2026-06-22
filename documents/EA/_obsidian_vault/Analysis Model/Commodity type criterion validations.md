---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Validation Rules"
domain: "Analysis Model"
element_id: 1708707
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Commodity type criterion validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Validation Rules

## 📝 Notes

Input:
- CommodityTypeCode [1..n] = code of the commodity type

Steps:

	
- System takes each CommodityTypeCode from the input and gets the validation criteria for the corresponding commodity type as follows:
   System calls the respective REST API provided by the Commodity module (i.e. GET Commodity-Type-Criteria) with following input parameters:
        - codes = CommodityTypeCode
	
- From the received response, system selects the validation criteria which are applicable for the respective commodity type.
	
- System processes the selected validations as follows:
   - If CommodityTypeCriteria.criterionType = 'PARENT_COMMODITY_TYPE', then the first commodity filled-in on the form must equal to CommodityTypeCriteria.value.
   - If CommodityTypeCriteria.criterionType = 'PARENT_PRICE_MIN', then the first commodity filled-in on the form must have the Price higher or equal to to CommodityTypeCriteria.value.
   - If CommodityTypeCriteria.criterionType = 'PARENT_PRICE_MAX', then the first commodity filled-in on the form must have the Price lower or equal to to CommodityTypeCriteria.value.
	
- If any of these validations fails, then system displays the MSG_CommodityTypeValidationError error message.

## 🔗 Connections (1)

- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
