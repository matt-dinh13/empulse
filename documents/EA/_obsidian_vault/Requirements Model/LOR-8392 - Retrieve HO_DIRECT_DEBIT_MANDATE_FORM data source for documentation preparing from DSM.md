---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL"
domain: "Requirements Model"
element_id: 1758877
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8392 - Retrieve HO_DIRECT_DEBIT_MANDATE_FORM data source for documentation preparing from DSM

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL

## 📝 Notes

As Loan Origination module, I need to be able to have the HO_DIRECT_DEBIT_MANDATE_FORM data source generated externally within the DSM module instead of preparing it internally by myself, so the respective feature is moved to the proper primary system for data source management and intended BSL modularization is therefore supported that way.

Solution proposal:

	
- When preparing the HO_DIRECT_DEBIT_MANDATE_FORM data source, call the respective REST API in order to have it generated externally within the DSM module (and subsequently returned within the corresponding API response).

## 🔗 Connections (1)

- → Realisation: [[LOR-6201 - Separate DSM from BSL]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-6201 - Separate DSM from BSL
