---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1749248
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9340 - DDM REST API - Implement PUT method for updating ECS provider on DDM / DDM draft

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Payments module, I need to enable the external systems to update the ECS provider on a direct debit mandate as well as its draft via my API, so they can update even the incomplete direct debit mandate during the loan origination process where the relevant data might be collected in several continuous steps (and not all in once).

Solution proposal:

	
- Introduce a new PUT method for updating the ECS provider (without the system's backend logic for automatic selection ECS provider being applied) on the both DDM entities - the direct debit mandate as well as the direct debit mandate draft.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9340 - DDM REST API - Implement PUT method for updating ECS provider on DDM / DDM draft
