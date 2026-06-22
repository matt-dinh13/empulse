---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1764241
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9290 - Copy DDM references from application to contract

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, when I am copying the temporary application data onto the contract, I need to copy also the references to all related direct debit mandates, so such references are present right on the contract level for further usage in various processes and I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When copying the temporary application data onto the contract, copy all available Temporary_Application->Application_to_DDM.DDM_ID into the Contract->Contract_to_DDM.DDM_ID.
- Impact to Application Processing rule {AF04A9C7-6A3F-4767-8837-4BDB3C46AC6A}.
   - 01.080 Fill in application
   - 01.095 Create and evaluate application
   - 01.310 Update application v9
   - 01.098 Update and evaluate application v9

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9290 - Copy DDM references from application to contract
