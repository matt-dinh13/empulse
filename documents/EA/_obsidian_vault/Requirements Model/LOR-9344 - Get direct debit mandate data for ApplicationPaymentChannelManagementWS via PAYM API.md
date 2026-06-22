---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1753252
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when retrieving the direct debit mandate data for their subsequent mapping into the ApplicationPaymentChannelManagementWS.GetDDMByApplicationResponse, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- When retrieving the direct debit mandate data for filling the ApplicationPaymentChannelManagementWS.GetDDMByApplicationResponse, use the following:
- DDM REST API GET method for getting the details of all direct debit mandates referenced by the Contract->Temporary_Application->Application_to_DDM.External_Identifier_ID.
- DDM REST API GET method for getting the details of all direct debit mandates registered for the processed contract (by providing corresponding contractCode on the input).
	
- Deactivate the ApplicationPaymentChannelManagementWS.CreateDDM and ApplicationPaymentChannelManagementWS.UpdateDDM methods (by always returning .resultCode = 'INVALID_DATA' just like in SetPaymentChannel method). //None of these methods is actually used in production based on logs.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
