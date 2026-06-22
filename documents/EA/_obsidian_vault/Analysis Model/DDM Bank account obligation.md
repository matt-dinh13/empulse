---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model"
domain: "Analysis Model"
element_id: 1667255
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 DDM Bank account obligation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/User Interface Model

## 📝 Notes

When bank account is used as part of DDM, then this specific rule which defines when are attributes mandatory will apply. These rules are influenced action performed with DDM.

Create DDM:
Bank is the only mandatory attribute during creation of DDM.

Update DDM:
Bank is the only mandatory attribute during update of DDM.

Receive DDM:
All attributes of bank account structure are mandatory during reception of DDM.

## 📊 Appears In (1 diagrams)

- Custom: Create/Update/Receive DDM
