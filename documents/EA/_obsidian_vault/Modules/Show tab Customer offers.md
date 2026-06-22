---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11502/CLM-4318 - Replace screen MMO with tab CO in CC"
domain: "Modules"
element_id: 1878944
diagrams: 5
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 Show tab Customer offers

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11502/CLM-4318 - Replace screen MMO with tab CO in CC

## 📝 Notes

Goal of this use case is to display tab Marketing offers. This tab is populated with contracts data based on REST API calls to:

	
- Product catalog module
	
- Offer Store module


On this tab user can do following actions

	
- Response to active marketing offer
	
- Update marketing offer
	
- Recalculate marketing offer

## 🔗 Connections (8)

- ← Dependency: [[{ADD}Customer offers tab v2 (Screen 1878702)]]
- → Realisation: [[06.030 Show client data (CB results) (Requirement 1799941)]]
- → Realisation: [[06.030 Show client data (hidden contracts)]]
- → Realisation: [[06.030 Show client data (Manage in CIF) (Requirement 1799938)]]
- → Realisation: [[06.030 Show client´s phone (Client detail) (Requirement 1799935)]]
- → Realisation: [[06.030 Show client data (Requirement 1799934)]]
- ← Dependency: [[{MOD}06.030 Show Client Data (UseCase 1878935)]]
- ← Association: [[User (Actor 1879373)]]

## 📊 Appears In (5 diagrams)

- Custom: CLM-4318 - Replace screen MMO with tab CO in CC
- Custom: CLM-4429  - Extend Customer offers with RTDM data
- Custom: Customer offers tab v2
- Use Case: Client Management
- Use Case: Customer offers - UseCase Model
