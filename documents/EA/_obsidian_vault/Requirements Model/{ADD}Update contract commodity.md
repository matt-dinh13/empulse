---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1878437
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Update contract commodity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

{ADD CLM-3768/}
This object describes the steps, how system updates the data of selected commodity (or multiple commodities).

Input:

	
- Array of following information-sets [1..n]:
   - CommodityID = unique identifier of the commodity
   - CommodityData = relevant data of the commodity to be updated
   - UpdateMode (optional) = mode to be used for the commodity update ('APPLICATION_FORM' value used by default if not received on the input)


Steps:

	
- System takes each CommodityID from the input and updates the data of corresponding commodity by calling the respective REST API provided by the Commodity module (i.e. updateCommodities) with following input parameters:
        - commodity.code = CommodityID 
        - commodity.* = CommodityData
        - updateMode = UpdateMode
        - validationParameters.* = filled according to the rule Get validation parameters for commodity data update with Contract_2_Commodity[.Commodity_ID=CommodityID]->Contract.Code as ContractCode and CommodityID on the input
If calling the service fails due to any reason, system displays the MSG_ModuleCommunicationFailure message and algorithm ends.
	
- In case the commodity is not successfully updated due to invalid commodity data, system displays the corresponding error message (specified bellow in the brackets) for particular errorMessage.errorCode received within the returned response:
   - DATA_NOT_EDITABLE (MSG_ObjectNotEditable)
   - INVALID_IMEI (MSG_IMEI_VALIDATION_ERROR)
   - INVALID_MODEL (MSG_InvalidModel)
   - VALIDATION_ERROR (MSG_CommodityValidationError)
For any other errorCode, system displays the MSG_ModuleCommunicationFailure message.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
