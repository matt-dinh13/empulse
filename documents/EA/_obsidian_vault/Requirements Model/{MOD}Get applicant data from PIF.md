---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10198 Integration to new version of PIF endpoint"
domain: "Requirements Model"
element_id: 1878482
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Get applicant data from PIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10198 Integration to new version of PIF endpoint

## 📝 Notes

This object describes the steps, how system gets the data of the specific applicant from the PIF module.

Input:
- ApplicantID = unique identifier of the applicant

Output:
- Applicant [0..1] = object of respective applicant
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicantID from the input and gets the data of the corresponding applicant by calling the respective REST API provided by the PIF module (i.e. GET {DEL LOR-10198}https://pif.{environment}/party-web/api/pif/v1/applicant/{externalId}{/DEL} {ADD LOR-10198}https://pif.{environment}/party-web/api/pif/v2/applicant/{externalId}{/ADD}) with following input parameters:
   - externalId = ApplicantID

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested applicant, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received applicant data (Applicant) from the response and returns it to the calling object.
	
- Algorithm ends.


{ADD LOR-10198}
Note:
Some of the values, returned by PIF, may be masked based on the user roles. Such values are represented by attribute formattedValues in the PIF response. If not states otherwise
{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[documentData]]
- ← Dependency: [[documentData]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10198 Integration to new version of PIF endpoint
- Custom: Operations with applicant
