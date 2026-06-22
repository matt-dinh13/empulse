---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract"
domain: "Modules"
element_id: 1876174
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Create notifications for Insurance prolongation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract

## 📝 Notes

The rule describes creation of a business event and notification message on the insurance prolongation

Input

	
- InsuranceContract


	
- ProlongationResult


Steps:

	
- If ProlongationResult.renewed = TRUE, then BusinessEventType = INSURANCE_PROLONGATION_RENEWED, else INSURANCE_PROLONGED
	
- System creates a Business Event according to the rule Create business event with the following parameters:
-- Contract = processed Contract
-- BusinessEventType =BusinessEventType
-- ModificationBy = currently logged user
-- TimeOfModification = current date and time
	
- If NotifyAboutEachInsuranceProlongation = TRUE (system property), the system generates {ADD}InsuranceProlongationRenewed notification --notify about each prolongation
	
- If NotifyAboutEachInsuranceProlongation = FALSE and ProlongationResult.renewed = TRUE -- notify only about renewal of prolongation after interruption due to DPD
- the system generates {ADD}InsuranceProlongationRenewed notification
	
- System returns to calling UC

## 🔗 Connections (3)

- ← Dependency: [[01.739 Process Account Balance Change EOM notification]]
- → Dependency: [[Create business event]]
- ← Dependency: [[11.081 Prolong insurance contracts]]

## 📊 Appears In (3 diagrams)

- Custom: Requirements: CBL-11727 (CSI-376) CSI Modularization - Insurance Contract
- Use Case: Insurance based on AccountBalanceChange EOM event
- Use Case: Insurance prolongation
