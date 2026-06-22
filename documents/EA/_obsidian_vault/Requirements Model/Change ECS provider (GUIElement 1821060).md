---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API"
domain: "Requirements Model"
element_id: 1821060
diagrams: 2
connections: 2
tags:
  - guielement
  - requirements-model
---

# 🖥️ Change ECS provider

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API

## 📝 Notes

Button for changing the ECS provider used for processing the application's direct debit mandate.

Activates one of the following use cases based on the value of the parameter (parameter.properties) useDDMREST:

	
- If TRUE, then the 01.423 Change ECS provider for application DDM use case is activated.
	
- Otherwise the 01.427 Change DDM ECS provider use case is activated instead.


Localization code:
DDM_Change_ECS_Provider

## 🔗 Connections (2)

- → Dependency: [[{MOD}01.427 Change DDM ECS provider]]
- → Dependency: [[01.423 Change ECS provider for application DDM (UseCase 1818672)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9381 - Update direct debit mandate ECS provider from Application detail via DDM REST API
- Custom: Tab - Direct debit mandates
