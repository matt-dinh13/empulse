---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3088 VAS - Deal (Insurance) Prolongation notification"
domain: "Requirements Model"
element_id: 1796853
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Create notifications for Insurance prolongation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3088 VAS - Deal (Insurance) Prolongation notification

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

## 📊 Appears In (1 diagrams)

- Use Case: VAS - Deal (Insurance) Prolongation notification
