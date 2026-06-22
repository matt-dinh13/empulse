---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8391 Enable RW channels for CEL Rewards service type in C2"
domain: "Requirements Model"
element_id: 1732381
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9073 Save CEL reward payment channel data from GUI application form via PAYM API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8391 Enable RW channels for CEL Rewards service type in C2

## 📝 Notes

Solution proposal:
 

	
- Save CEL reward payment channel data from GUI application form via PAYM API


	
- When saving the application form (GUI) data, use the REST API GET method for getting the details of all payment channels referenced by Temporary_Application->Application_to_Payment_Channel.Payment_Channel_ID.
- In case there is no reference to CEL reward payment channel on the application yet, use the REST API POST method for creating a respective new payment channel instance. Save the returned dataExchangeId into Temporary_Application->Application_to_Payment_Channel.Payment_Channel_ID.
- In case there is a reference to CEL reward payment channel on the application already, use the REST API PATCH method for updating the respective existing payment channel instance instead.


	
- Copy the reference for the CEL reward payment channel from application to contract (along with other TA data after the application form is submitted).

## 🔗 Connections (1)

- → Realisation: [[LOR-8391 Enable RW channels for CEL Rewards service type in C2]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8391 Enable RW channels for CEL Rewards service type in C2
- Custom: LOR-9073 Save CEL reward payment channel data from GUI application form via PAYM API
