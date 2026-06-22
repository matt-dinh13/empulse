---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1721809
diagrams: 2
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Create application commodity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

This object describes the steps, how system creates a new commodity (or multiple commodities) for the application.

Input:
- CommodityData = relevant data of the commodity [1..n] to be updated

Steps:

	
- System creates a new record of Application_2_Commodity and links it to the processed application (i.e. Temporary_Application->Application_2_Commodity).
	
- System creates a new commodity as follows:
   System calls the respective REST API provided by the Commodity module (i.e. POST Commodities) with relevant CommodityData on the input.
   
If calling the service fails due to any reason, system displays the MSG_ModuleCommunicationFailure message and algorithm ends.
	
- In case the commodity is successfully created, system saves the returned commodity identifier to the processed application (i.e. Temporary_Application->Application_2_Commodity.Commodity_ID = code received within the returned response).

Otherwise system displays the corresponding error message (specified bellow in the brackets) for particular errorMessage.errorCode received within the returned response:
   - INVALID_COLOR_CODE
   - INVALID_COMMODITY_TYPE
   - INVALID_DELIVERY_TYPE
   - INVALID_PRICE
   - INVALID_PRODUCER
   - INVALID_IMEI (MSG_IMEI_VALIDATION_ERROR)
   - INVALID_MODEL (MSG_InvalidModel)
For any other errorCode, system displays the MSG_ModuleCommunicationFailure message.
	
- Algorithm ends.

## 🔗 Connections (6)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{MOD}01.314 Create application externally]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- ← Dependency: [[{MOD}01.310 Update application v9]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Operations with application commodities
