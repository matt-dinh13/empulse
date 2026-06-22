---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-7859 E2E POS: Retrieve Cancellation Reason using Web Services"
domain: "Requirements Model"
element_id: 1719521
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8763 CSD endpoint for contract status transition

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-7859 E2E POS: Retrieve Cancellation Reason using Web Services

## 📝 Notes

As a system, I will synchronize status transition reasons from CSD

Solution proposal:

	
- integrate to https://git.homecredit.net/csd/csd-rest-client/-/blob/release/1.11/swagger.json#/Contract%20data/searchContractTransitionReason (endpoint not merge yet, this is just documentation)
	
- map records to our object and store them

## 🔗 Connections (1)

- → Realisation: [[LOR-7859 E2E POS_ Retrieve Cancellation Reason using Web Services]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-7859 E2E POS: Retrieve Cancellation Reason using Web Services
- Custom: LOR-8763 CSD endpoint for contract status transition
