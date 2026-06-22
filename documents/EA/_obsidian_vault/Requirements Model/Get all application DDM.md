---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9342 - Validate direct debit mandates via DDM REST API"
domain: "Requirements Model"
element_id: 1821078
diagrams: 5
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Get all application DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9342 - Validate direct debit mandates via DDM REST API

## 📝 Notes

//This objects is covering just a temporary logic for getting the data of all direct debit mandates associated with the application, which is necessary for the temporary transition period when ApplicationManagementWS_v22 is still supported while ApplicationManagementREST is already available to the public (in order to keep the backwards compatibility for some of the business processes). This business rule shall be deleted (and replaced by the usage of Get application DDM only) once ApplicationManagementWS_v22 is finally decommissioned or the parameter (parameter.properties) useDDMREST is definitively removed from the system, whichever comes later.
This object describes the steps, how system gets the data of all direct debit mandates associated with the application.

Input:
- ApplicationCode = unique identifier of the application

Output:
- DirectDebitMandate [0..n] = object of respective direct debit mandate
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode from the input and gets the data of each direct debit mandate associated directly with the processed application (if there are any) according to the rule Get application DDM with following parameters on the input:
   - DirectDebitMandateCode = Contract[.Contract_Code=ApplicationCode]->Temporary_Application->Application_to_DDM.DDM_ID

In case of failure (i.e. when ErrorCode is returned on the rule's output), system returns the respective ErrorCode to the calling object and algorithm ends.
	
- System gets the data of all direct debit mandates, which are referencing to the application with the ApplicationCode from the input by calling the respective REST API provided by the Payments module (i.e. GET DDM) with following input parameters:
   - contractCode = ApplicationCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends. Otherwise system receives the GetDDMResponse and proceeds to the next step.
	
- System takes all DirectDebitMandate (DirectDebitMandateData) records retrieved within the previous steps and removes any duplicates (using the DirectDebitMandate.ddmCode).
	
- System takes each remaining DirectDebitMandate (if there are any) and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (9)

- ← Dependency: [[{MOD}01.462 Get DDM by application]]
- ← Dependency: [[Document (Class 1819793)]]
- ← Dependency: [[ApplicationDetail (Class 1820059)]]
- ← Dependency: [[Get client's previous DDM for application form prefilling]]
- → Dependency: [[Get application DDM]]
- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- ← Dependency: [[ProductDetailsType]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- Custom: LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form
- Custom: Operations with application DDM
