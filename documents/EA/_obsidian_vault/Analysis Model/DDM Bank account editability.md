---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)"
domain: "Analysis Model"
element_id: 1667257
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 DDM Bank account editability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)

## 📝 Notes

When bank account is used as part of DDM, then this specific rule which defines when it's possible to change which attributes will apply. These rules are influenced by status of contract, status of DDM and performed action.

Create DDM:
It is possible to modify any attribute of bank account in case of the create DDM functionality.

Update DDM:
Set of attributes which are editable during update of DDM depends on status of contract and astatus of DDM.

DDM status New and contract status Approved - All bank account attributes except Bank are editable. Bank is read only.
DDM status New and contract status Signed - All bank account attributes are editable.
DDM status New and contract status Active - All bank account attributes are editable.
DDM status New and other contract statuses - it's not possible to modify bank account attributes at all
Other DDM statuses (regardless of contract status) - it's not possible to modify bank account attributes at all

Receive DDM:
It is possible to modify any attribute of bank account in case of the receive DDM functionality.

## 📊 Appears In (2 diagrams)

- Custom: Create/Update DDM
- Custom: Create/Update/Receive DDM
