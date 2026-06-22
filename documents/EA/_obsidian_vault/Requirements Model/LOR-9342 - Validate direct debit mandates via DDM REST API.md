---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1749247
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9342 - Validate direct debit mandates via DDM REST API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to validate direct debit mandates associated with the processed application for the correctness and completeness of their data via REST API provided by Payments module when preparing the contract documentation or signing the contract, so I can make sure those direct debit mandates are valid for further processing while also allowing the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When preparing the contract documentation or signing the contract, use the DDM REST API POST method for validating the data of all direct debit mandates referenced by the Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID.
	
- Adjust the existing DDM validations and other DDM-related operations done during the documentation preparing and contract signing accordingly:
- 01.186 Prepare documentation
   - Step 10 - remove all available DDM documents by calling the DDM REST API PUT method for updating the existing instance of direct debit mandate or direct debit mandate draft.
   - Step 11 - possibly skip completely (rule DDM attributes validation - IN seems not to be present in the code).
   - Step 18 - update the direct debit mandate's validity by calling the DDM REST API PUT method for updating the existing instance of direct debit mandate or direct debit mandate draft.
- 01.187 Sign contract
   - Step 5 - possibly skip completely (rule DDM attributes validation - IN seems not to be present in the code).

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
