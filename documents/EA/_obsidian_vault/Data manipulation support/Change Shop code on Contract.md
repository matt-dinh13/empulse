---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations"
domain: "Data manipulation support"
element_id: 1277913
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 Change Shop code on Contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Other contract manipulations

## 📝 Notes

This use case describes steps to change Salesroom where the contract is originated. This type of change can be only done when Contract exists. 

List of steps overview:

	
- Check if a product related to the contract can be offered by the new Salesroom
	
- Change the Salesroom reference on Contract. The Salesroom reference on Temporary Application can stays unchanged.
	
- Check Contract Payment Channel  who is recipient for outgoing payment
	
- If  Contract Payment Channel of purpose 'Disbursement' is 'SBA' type, it is needed to remove created outgoing payments from "old" salesroom to new one as follow:
A. If Outgoing payment is UNPAID for the mentioned Payment Channel, it is only changed reference to Salesroom on Contract Payment Channel
B. If Outgoing payment is PAID for the mentioned Payment Channel, it is changed reference to Salesroom on Contract Payment Channel and created a new Outgoing Payment for the contract. The original Outgoing Payment is cancelled.
	
- Change a credit package (if exists) to the new Salesroom
	
- Change a ticket "missing documents" (if exists) to the new Salesroom

## 🔗 Connections (1)

- → Dependency: [[OBS message mapping rules]]

## 📊 Appears In (1 diagrams)

- Use Case: Other contract manipulations
