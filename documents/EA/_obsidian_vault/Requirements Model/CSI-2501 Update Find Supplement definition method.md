---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval"
domain: "Requirements Model"
element_id: 1757338
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2501 Update Find Supplement definition method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval

## 📝 Notes

Update REST API GET ../supplements (Find supplement) so that the result returns data from the Supplement -> Evaluate Request Definition object

Additional setting for Supplement of Transaction type

	
- Timeout must be set on the Supplement definition for the IN_PROCESS status and will be processed by standard way (set Transaction Supplement status = CANCELLED)
	
- A new configuration for Transaction Supplement approval in the Evaluation Request Definition

## 📊 Appears In (1 diagrams)

- Custom: CBL-19094 (CSI-2286) EMI Card and Flexi transactions approval
