---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage"
domain: "Requirements Model"
element_id: 1757670
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Check COP ER request availability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage

## 📝 Notes

System executes following checking:

	
- Service of type COP is assigned to Contract (MSG_COP_NoAvailable)


	
- COP_DUE_DATE_MAX (value from Contract Service Parameter; maximal acceptable date when service can be applied) < the current date (MSG_COP_Expired). Notification message uses optional placeholder ${COP Length}, which is replaced with COP length for active COP service related with contract.
	
- {ADD CSI-2407}
The rule {ADD}Check TopUp overlap period for contract returns FALSE, else show MSG_CONTRACT_IN_OVERLAP_PERIOD (Request cannot be created in topup overlap period).
{/ADD}


	
- If a service code of collection tool services is returned by Check for collection tool services then MSG_CollectionToolServiceRequestsExists is added to Notification; (e.g. A request for {Service Codes} collection tool service is active and has to be cancelled to be created this request.)


Result of checking is returned (true/false) plus Notification (set of error messages) in case of false.

## 🔗 Connections (3)

- → Dependency: [[Check for collection tool services]]
- → Dependency: [[Check TopUp overlap period for contract]]
- ← Dependency: [[08.065 Calculate Cooling-off period repayment preview]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-5648 (CLM-2018) Transaltions for FER, COP
- Use Case: Cooling-off period request
