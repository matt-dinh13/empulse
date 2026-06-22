---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Business Rules"
domain: "Analysis Model"
element_id: 1573591
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get validation parameters for commodity data update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Business Rules

## 📝 Notes

This object describes an algorithm, how system gets the validation parameters for commodity data update.

Input:
- contractCode = code of the contract related to the commodity to be updated
- commodityID = identifier of the commodity to be updated

Output:
- eventType = type of the event to be used as an input for commodity data validation
- insuranceServiceCode (optional) = code of the insurance service assigned to the commodity to be updated
- productCode = code of the product, that the contract (related to the commodity to be updated) is based on
- financingPackgeCode (optional) = code of the applicable financing package from the product, that the contract is based on

Algorithm:

	
- System takes the contractCode from the input and gets the values of individual validation parameters as follows:

- eventType = value got according to the rule Get event type for commodity data update with contractCode on the input

A) If contract has not been signed yet:
   - insuranceServiceCode = Contract[.Code=contractCode]->Offer_Financial_Parameter[.Chosen=TRUE]->Offer_Service[.Commodity_ID=commodityID]->Service.Code
   - productCode = Contract[.Code=contractCode]->Offer_Financial_Parameter[.Chosen=TRUE].Product
   - financingPackgeCode = Contract[.Code=contractCode]->Offer_Financial_Parameter[.Chosen=TRUE].Financing_Package 

B) If contract has been signed already:
   - insuranceServiceCode = Contract[.Code=contractCode]->Financial_Parameters->Contract_Service[.Commodity_External_ID=commodityID]->Service.Code
   - productCode = Contract[.Code=contractCode]->Financial_Parameters->Product Variant->Product.Code
   - financingPackgeCode = Contract[.Code=contractCode]->Financial_Parameters.Financing_Package
.
	
- System returns the respective validation parameters and algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Get event type for commodity data update]]
- ← Dependency: [[Update application commodity]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Manage contract commodities
