---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1878451
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get current party data from CIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

This object describes the steps, how system gets the current data about the particular party from CIF.

Input:
- PartyID = unique identifier of the party
- DataProjectionList (optional) = list of data sets [0..n] to be returned for the respective party

Output:
- PartyData = requested party data obtained from CIF ( GetCustomerDataResponse)
- ErrorResult (optional) = indication of error result, when some issues occur during the performed steps


Steps:

	
- System takes the PartyID and DataProjectionList from the input and gets the applicable data about the corresponding party by calling the respective REST API provided by CIF module (i.e. GetCustomerDataRequest) with following parameters on the input:
     - externalId = PartyID
     - projections = DataProjectionList

If calling the service fails due to any reason or no party data are returned in the response, algorithm ends with no PartyData returned on the output (along with the respective ErrorResult when applicable).
	
- System takes the received GetCustomerDataResponse and returns the relevant PartyData to the calling object. Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- ← Dependency: [[{MOD}PersonalDetailsType]]

## 📊 Appears In (1 diagrams)

- Custom: Overview
