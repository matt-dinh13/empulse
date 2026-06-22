---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections"
domain: "Modules"
element_id: 1799745
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections

## 📝 Notes

Create two new endpoints (GET owners, GET and POST joint-lenders) with corresponding rights and create new default projections (OWNER_DEFAULT, JOINT_LENDER_DEFAULT) to existing search contracts and contract detail endpoints to accommodate the new data structures. Incorporate the new data structures also into the Kafka ContractChangedEvent message.

## 📊 Appears In (1 diagrams)

- Custom: CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections
