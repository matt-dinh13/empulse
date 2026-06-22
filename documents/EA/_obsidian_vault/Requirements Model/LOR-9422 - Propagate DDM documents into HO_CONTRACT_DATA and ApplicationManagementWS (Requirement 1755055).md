---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1755055
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to propagate DDM documents among the contract documents within the respective section of the HO_CONTRACT_DATA data source / ApplicationManagementWS.GetApplicationDataResponse, so I can assure the backwards compatibility of the system's behavior for the specific PH usage of 'CONTRACT' and 'DDM' flags on a single document type.

Solution proposal:

	
- Extend the source of document data for HO_CONTRACT_DATA.contractData.product.documents.contractDocument.* data source elements as well as for ApplicationManagementWS.GetApplicationDataResponse.application.documents.* attributes (not to be applied to ApplicationManagement REST) with DDM documents associated with the direct debit mandates retrieved by calling the following: //Put this feature behind a temporary switch, which is enabled on PH only, as that is the only country, which needs such backwards compatibility due to the current configuration of document type flags for ADA document.
- DDM REST API GET method for getting the details of all direct debit mandates referenced by the Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID.
- DDM REST API GET method for getting the details of all direct debit mandates registered for the processed contract (by providing corresponding contractCode on the input).
	
- Update the migration guide for ApplicationManagement REST in a way, that the local apps have to be newly getting the DDM documents directly from DDM entity (i.e. by calling the DDM REST API endpoint in order to get the document UUID and then eventually call the DMS REST API endpoint in order to get its particular details.


Note: The document data themselves can be possibly get via DMS API or by a direct call into the database.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
