---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1829625
diagrams: 3
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {ADD}11.072 Create New Period for Prolongation (VAS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-2967 /}
The use case presents a function for the Deal Period (insurance Period) prolongation. 
There are two basic steps of this process:

	
- Check the insurance and insured client for eligibility
	
- Establishing a new insurance period including outgoing payment for an Insurance company

## 🔗 Connections (8)

- → Dependency: [[Check INSR Insurance Program eligibility]]
- → Dependency: [[{ADD}Check Deal Period limit passed]]
- → Dependency: [[{ADD}Determine next Deal Period]]
- → Dependency: [[Check DPD limit for Deal prolongation]]
- → Dependency: [[{ADD}Create notifications for Deal prolongation]]
- → Realisation: [[{ADD}11.070 Prolong Deal Period (VAS)]]
- → UseCase «include»: [[{ADD}11.076 Finalize Deal Period]]
- ← UseCase «include»: [[{ADD}11.070 Prolong Deal Period (VAS) (UseCase 1829611)]]

## 📊 Appears In (3 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
- Use Case: VAS - Deal (Insurance) Prolongation notification
