---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose"
domain: "Requirements Model"
element_id: 1811034
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement1

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose

## 📝 Notes

Goal of the task is storing Loan Purpose (LP) value and a list of Commodity Types to the Transaction Supplement and use it for the Document printout generation.

From the VN legal requirement, it is requested on each Supplement of HPL transaction:

	
- to have BNPL transaction commodity data in Supplement,


	
- to receive Loan Purpose calculated and updated by VN Payment local system on each Supplement (after approved),


	
- to print out Supplement document with Loan Purpose value above,


Prerequisite:

	
- The LP value and the Commodity IDs are stored in the ADS (ORP ensures storage there - see the ORP process description below).


Expected impact to CSI part:

	
- Get LP and Commodity IDs from the ADS before the document printouts generation
	
- The LP value should be stored in the Custom Data structure
	
- The Commodity IDs: store it in the Custom Data but the list of Commodity IDs needs to be stored in one "value" field, so some delimiters would be needed.
	
- LP value must be presented in the BNPL data source for printouts
	
- LP value must be returned in the API, KAFKA message of the Transaction Supplements
	
- The contract-supplements API (https://bsl.id00c1.id.infra/bsl/api/swagger-ui.html#/Contract%20supplements/getContractSupplementsUsingGET_6) should return client CUID in the related subjects. Fix the swagger doc?


Solution proposal from ORP perspective (only for info)

	
- ORP will receive list of commodity type code within /chooseOffer request
	
- after scoring was successful (approved), ORP will call local module (PCS) to decide loan purpose
	
- communication will be via Rabbit
	
- payload will contain list of commodity types and transaction amount
	
- ORP will store commodity data to commodity module
	
- ORP will store loan purpose value and commodity Ids to application in ADS
	
- ORP will create supplement in BSL and BSL will retrieve required data from ADS and continue with generating documents

## 📊 Appears In (1 diagrams)

- Custom: CBL-22675 (CLM-5768) BNPL Supplement with Commodity data for Loan Purpose
