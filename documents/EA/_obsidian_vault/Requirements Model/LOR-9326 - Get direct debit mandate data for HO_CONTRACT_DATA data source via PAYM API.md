---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1748278
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when retrieving the direct debit mandate data during the generating of HO_CONTRACT_DATA data source, so I can allow the future modularization of LOR functionalities into separate module(s).
Solution proposal:

	
- When retrieving the direct debit mandate data for filling the contractData.directDebitMandates.directDebitMandate.* elements within the HO_CONTRACT_DATA data source with data about the DDM associated with the contract, use the DDM REST API GET method for getting the details of all direct debit mandates referenced by the Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID and filter them accordingly when needed.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
