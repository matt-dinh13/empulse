---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates"
domain: "Requirements Model"
element_id: 1738493
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9160 - Save direct debit mandate data from application form via DDM REST API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when handling the direct debit mandate data collected on the application form, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- Adjust the connector to the DDM REST API v1 endpoint:
- Upgrade the version of the used endpoint to v2 (applicable for all methods except the internal Validate DDM method, which is currently used with no dependency on any temporary switch).
- Delete all usages of the v1 endpoint controlled by the useDDMRest temporary switch implemented in LOR-7653 and LOR-7654 (to be replaced by a fresh implementation of v2 endpoint methods).
	
- Adjust the data type and name of the BSL_APPLICATION2DDM.DDM_ID table column.
	
- Save DDM data from API and GUI application form via DDM REST API (to be used as a replacement for using the TA_PAYMENT_CHANNEL structures).

## 🔗 Connections (1)

- → Realisation: [[LOR-9158 - Separate LOR from PAYM module - Direct debit mandates]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9158 - Separate LOR from PAYM module - Direct debit mandates
- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
