---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Business Rules"
domain: "Modules"
element_id: 1208893
diagrams: 4
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Version activation procedure

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Business Rules

## 📝 Notes

Procedure of activation of versioned object.
Input: 
- Type of versioned Entity (PRODUCT/SERVICE/TARIFF).
- Code of particular Instance of Entity .
- Version of particular Instance of Entity in status Inactive.

Confirmation dialog (MSG_ACTIVATE_VERSION_1) is displayed with following options:

1) Activate now 

	
- If exists another version of the same Instance of Entity in status  Active, system sets the status of this version to Terminated and Version Termination date to current date and time
	
- System sets the status of selected version of Instance of Entity to Active and Version Activation date to current date and time.


2) Activate later 

	
- System displays form for entering of Activation date.
	
- If user enters correct activation date (Planned version activation date+time) then

-- If already exists another version of the same Instance of Entity in status For Activation a confirmation dialog is displayed (MSG_ACTIVATE_VERSION_2). If continuation is not confirmed , procedure ends.
-- Else system sets the status of selected version of Instance of Entity to For Activation and saves InstanceOfEntity.PlannedActivationDate.

3) Cancel 

	
- procedure ends.

## 🔗 Connections (4)

- → Dependency: [[Planned version activation date]]
- ← Dependency: [[{DEL}04.180 Activate Tariff version manually]]
- ← Dependency: [[{DEL}08.180 Activate Service version manually]]
- ← Dependency: [[{DEL}02.260 Activate product version manually]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules for Versioned Entity
- Use Case: Manage Product
- Use Case: Manage Services
- Use Case: Tariffs
