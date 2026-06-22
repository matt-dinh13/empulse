---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1749928
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Loan Origination module via its provided REST API when retrieving the application data during the generating of HO_CONTRACT_DATA or HO_DIRECT_DEBIT_MANDATE_FORM data source, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- Replace the usage of ApplicationManagementWS v23 within DSM module for ApplicationManagement REST.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
