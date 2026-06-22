---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1795118
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2918 VAS Deal activation method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

Original functions in BSL:

	
- UC11.147 Activate insurance on contract (API)
	
- UC11.040 Activate insurance contract (status change only)


Additional function required:

	
- UC11.126 Check client eligibility for insurance


ActivateDeal() method
Input:

	
- dealCode
	
- activationDate
	
- billingDay
	
- reason (opt)

Steps AW - REL account insurance:

	
- get Insurance Service setting -> two sources (PCG APIs)
	
- determine first insurance period -> Set BillingPeriodEnd by Expected date of Billing period rule (FP is used) -> get the billing date from AM/via input?
	
- check client's eligibility (UC11.126)
	
- create insurance period (no UC used)
	
- set Insurance Operation Status to SWITCHED_ON
	
- Generate notification about insurance change

Steps for AW - Transaction Supplement Insurance: (not needed for 1st phase)

	
- determine first insurance period - from input
	
- create insurance period (no UC used)
	
- activate insurance contract (UC11.040)

## 🔗 Connections (2)

- ← Dependency: [[CSI-2971 Activate Service on Contract (Requirement 1796485)]]
- ← Dependency: [[CSI-2971 Activate Service on Contract (Requirement 1837948)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-22680 Overview of Stories
- Custom: Requirements: CBL-11727 (CSI-376) CSI Modularization - Insurance Contract
