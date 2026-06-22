---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1795125
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2967 Prolong Deal Period method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

Goal of the task is creating of the Deal prolongation function based on
BSL Insurance Contract prolongation is called from:

	
- 01.739 Process Account Balance Change EOM notification -- old insurance support, there is mixed in the activation in the BSL
First Insurance Period Trigger = FIRST_EOM_BILLING_DATE and Insurance Contract.Automatic Prolongation = TRUE;  -- called by AccountBalanceChange notification of EOM type


	
- Prolongation - 11.081 Prolong insurance contracts -- called from INSURANCE_PROLONGATION job; old insurance support
	
- Prolongation - 11.773 Process account EOM billing finished notification -- called by ContractInsuranceDto, new type of insurance

## 🔗 Connections (2)

- ← Dependency: [[CSI-2979 Process Account EoM billing notification]]
- ← Dependency: [[CSI-2979 Process Account EoM billing notification (Requirement 1837936)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-22680 Overview of Stories
- Custom: Requirements: CBL-11727 (CSI-376) CSI Modularization - Insurance Contract
