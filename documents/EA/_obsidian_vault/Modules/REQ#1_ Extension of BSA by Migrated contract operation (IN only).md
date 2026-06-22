---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-31177 (CSI-4598) Migrated contract support"
domain: "Modules"
element_id: 1881320
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1: Extension of BSA by Migrated contract operation (IN only)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Requirement model/CBL-31177 (CSI-4598) Migrated contract support

## 📝 Notes

Changes in the Logical model:
- new operation type MIGRATED_CONTRACT
- Bulk Operation.Operation Subtype field is used to store operation MIGRATION / MIGR_ROLLBACK

Changes in the UI:
- new form for creation of Migrated contract

Changes in the UC and Access rights:
- new 08.771 Create Migrated contract bulk operation
- new 08.772 Validate Migrated contract bulk operation
- new 08.773 Execute Migrated contract bulk operation
- update of common UC 08.711 Execute bulk operation to support Migrated contract
- new UC Process AccountNotification for async rollback operation by AM

Changes in integration:
Provided:
- expose new API for creation of MIGRATED_CONTRACT bulk operation (same API which is used between front end and back end)
- new COMA API
- new AM API
- extend BSA Rabbit notification by new operation (if needed)

Consumed:
- new Rabbit MQ notification consumed by BSA to receive async response from AM (for rollback only)
- processed by new UC {ADD}Process AccountNotification

## 📊 Appears In (1 diagrams)

- Custom: CBL-31177 (CSI-4598) Migrated contract support
