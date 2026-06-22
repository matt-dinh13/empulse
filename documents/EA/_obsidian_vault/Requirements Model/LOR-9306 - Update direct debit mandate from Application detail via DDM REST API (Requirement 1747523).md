---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1747523
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9306 - Update direct debit mandate from Application detail via DDM REST API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when updating the direct debit mandate on the Application detail screen, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When retrieving the direct debit mandate data for their displaying on the Direct debit mandates tab (Application detail screen), use the DDM REST API GET method for getting the details of all direct debit mandates referenced by the Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID and filter them accordingly when needed.
- Impact to the 01.210 Show contract detail use case.
	
- When retrieving the direct debit mandate data for their prefilling into the respective Update DDM form fields, use the DDM REST API GET method for getting the details of the direct debit mandate referenced by the respective Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID for which such operation was initited.
	
- When saving the data from the Update DDM form, use the DDM REST API PUT method for updating the existing instance of direct debit mandate or direct debit mandate draft.
- Impact to the 01.422 Update application DDM use case.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
