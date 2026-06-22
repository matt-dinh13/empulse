---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination"
domain: "Requirements Model"
element_id: 1752472
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 Create new logic for finding/creating bank accounts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination

## 📝 Notes

We need to create a new business rule for finding/creating of bank account in order to unify the process of bank account creation an in order to stop duplication of bank accounts. The business rule will be used directly in use cases that create or work with bank accounts. Next step will be to create a WS wrapper method and start using it instead of the business rule directly (this will be covered in REQ#4).

## 🔗 Connections (1)

- → Generalization: [[PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination (Requirement 1752470)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination
