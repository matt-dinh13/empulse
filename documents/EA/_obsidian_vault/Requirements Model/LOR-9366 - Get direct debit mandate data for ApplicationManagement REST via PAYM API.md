---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1753250
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when retrieving the direct debit mandate identification codes for their subsequent mapping into the ApplicationManagementREST.[Get applicationdata].ApplicationDetailRestTO.directDebitMandates, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When filling the direct debit mandate identification codes into the ApplicationManagementREST.[Get applicationdata].ApplicationDetailRestTO.directDebitMandates, use the following data:
- List of available Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID.
- GetDDMResponse.ddmData.ddmCode returned by the DDM REST API GET method for getting the details of all direct debit mandates registered for the processed contract (by providing corresponding contractCode on the input).

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9366 - Get direct debit mandate data for ApplicationManagement REST via PAYM API
