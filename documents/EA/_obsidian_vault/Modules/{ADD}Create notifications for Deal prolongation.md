---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1827289
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Create notifications for Deal prolongation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-3088 /}
The rule describes creation of a notification message on the Deal (insurance) prolongation

Input

	
- InsuranceContract


	
- ProlongationResult


Steps:

	
- If NotifyAboutEachInsuranceProlongation = TRUE (system property), the system generates {ADD}InsuranceProlongationRenewed notification --notify about each prolongation
	
- If NotifyAboutEachInsuranceProlongation = FALSE and ProlongationResult.renewed = TRUE -- notify only about renewal of prolongation after interruption due to DPD
- the system generates {ADD}InsuranceProlongationRenewed notification
	
- System returns to calling UC

## 🔗 Connections (1)

- ← Dependency: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]

## 📊 Appears In (1 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
