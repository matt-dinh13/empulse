---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage"
domain: "Requirements Model"
element_id: 1757675
diagrams: 2
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Check CET request availability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage

## 📝 Notes

System executes following checking:

	
- Service of type CET is assigned to Contract (MSG_CET_NoAvailable)
	
- Check if Installment Schedule is Closed (MSG_INST_SCHEDULE_CLOSED)
	
- {ADD CSI-2407}
The rule {ADD}Check TopUp overlap period for contract returns FALSE, else show MSG_CONTRACT_IN_OVERLAP_PERIOD (Request cannot be created in topup overlap period).
{/ADD}
	
- If a service code of collection tool services is returned by Check for collection tool services then MSG_CollectionToolServiceRequestsExists is added to Notification; (e.g. A request for {Service Codes} collection tool service is active and has to be cancelled to be created this request.)

Notification is returned to the calling UC

## 🔗 Connections (5)

- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[Check for collection tool services]]
- ← Dependency: [[08.271 Create CET repayment request (UseCase 1862246)]]
- ← Dependency: [[01.784 Create ContractCETRequest service]]
- ← Dependency: [[{MOD}08.272 Get CET data preview]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Use Case: Contract Early Termination request creation
