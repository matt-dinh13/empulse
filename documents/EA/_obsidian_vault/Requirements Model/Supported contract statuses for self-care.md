---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/BRPH-2066 (CSI-4207) Include Cancelled Status on BSL Endpoint"
domain: "Requirements Model"
element_id: 1868138
diagrams: 3
connections: 12
tags:
  - requirement
  - requirements-model
---

# 📋 Supported contract statuses for self-care

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/BRPH-2066 (CSI-4207) Include Cancelled Status on BSL Endpoint

## 📝 Notes

System will provide data only about contract in status:

	
- N (Signed)
	
- A (Active)
	
- L (Paid off)
	
- {BRPH-2066 CSI-4207} C (Cancelled) AND contract was cancelled after signature (there is a record with status = N in the table BSL_CONTRACT_STATUS_TRANS for the contract) {/BRPH-2066 CSI-4207}

## 🔗 Connections (12)

- → Association: [[REQ#1 Obtaining information about services from the cancelled contracts (only cancelled contracts af]]
- ← Dependency: [[{DEL}01.765 Get early repayment preview for self-care]]
- ← Dependency: [[01.759 Get contract services for self-care (UseCase 1869812)]]
- ← Dependency: [[01.791 Set Document File service (UseCase 1869810)]]
- ← Dependency: [[{MOD}01.772 Get contract list insurances for self-care]]
- ← Dependency: [[01.764 Get loan account overview for self-care (UseCase 1869806)]]
- ← Dependency: [[01.761 Get contract service requests for self-care (UseCase 1869802)]]
- ← Dependency: [[{MOD}01.757 Get contracts for self-care]]
- ← Dependency: [[{MOD}01.763 Get Contract Documents for self-care]]
- ← Dependency: [[01.762 Get contract payment channels for self-care (UseCase 1869795)]]
- ← Dependency: [[{MOD}01.758 Get contract commodities for self-care]]
- ← Dependency: [[01.792 Set Document ProofCheck service]]

## 📊 Appears In (3 diagrams)

- Custom: BRPH-2066 (CSI-4207) Include Cancelled Status on BSL Endpoint
- Custom: Business Rules
- Custom: CBL-7686 (CLM-2459) Enhancement Insurance API for Mobile Apps
