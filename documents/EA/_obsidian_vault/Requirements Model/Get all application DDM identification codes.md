---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API"
domain: "Requirements Model"
element_id: 1821068
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Get all application DDM identification codes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API

## 📝 Notes

//This objects is covering just a temporary logic for getting the codes of all direct debit mandates associated with the application, which is necessary for the temporary transition period when ApplicationManagementWS_v22 is still supported while ApplicationManagementREST is already available to the public (in order to keep the backwards compatibility for some of the business processes). This business rule shall be deleted (and replaced by the usage of Contract->Temporary_Application->Application_to_DDM.DDM_ID references only) once ApplicationManagementWS_v22 is finally decommissioned or the parameter (parameter.properties) useDDMREST is definitively removed from the system, whichever comes later.
This object describes the steps, how system gets the identification codes of all direct debit mandates associated with the application.

Input:
- ApplicationCode = unique identifier of the application

Output:
- DirectDebitMandateCode [0..n] = code of respective direct debit mandate
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the ApplicationCode from the input and gets the code of each direct debit mandate associated directly with the processed application (if there are any) by reading the  Contract[.Contract_Code=ApplicationCode]->Temporary_Application->Application_to_DDM.DDM_ID.
	
- System gets the data of all direct debit mandates, which are referencing to the application with the ApplicationCode from the input by calling the respective REST API provided by the Payments module (i.e. GET DDM) with following input parameters:
   - contractCode = ApplicationCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends. Otherwise system receives the GetDDMResponse and proceeds to the next step.
.
	
- System takes all Application_to_DDM.DDM_ID and DirectDebitMandate.ddmCode (i.e. DirectDebitMandateData.ddmCode) retrieved within the previous steps and removes any duplicates.
	
- System takes each remaining DirectDebitMandateCode (if there are any) and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[01.040 Get application data (UseCase 1879289)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API
