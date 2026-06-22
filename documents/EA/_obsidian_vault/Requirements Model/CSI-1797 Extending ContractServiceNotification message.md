---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods"
domain: "Requirements Model"
element_id: 1721098
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1797 Extending ContractServiceNotification message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods

## 📝 Notes

Newly, AM system will receive ContractServiceNotification message due to processing contract service (contract insurance service) cancellation and termination events.
The ContractServiceNotification will be extended with following attributes:

	
- loanCode (identifier of the business case, presented by Transaction Supplement)
	
- sourceTrxId (identifier of the original transaction used for the cancelled/terminated ContractService fee)
	
- dateTime ContractService event


AM needs to filter cancellation and termination events and also business cases presented by TransactionSupplements only.

ContractServiceNotification v3:
https://git.homecredit.net/product/hss-integration/-/blob/master/hss-services/hss-contractmanagement/src/main/resources/net/homecredit/hss/integration/contractmanagement/contractservice/notification/v3/xsd/ContractService.xsd

## 🔗 Connections (1)

- → Generalization: [[CBL-16736 General requirement]]

## 📊 Appears In (1 diagrams)

- Custom: Update BSL Contract Service methods
