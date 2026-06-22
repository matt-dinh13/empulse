---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java"
domain: "Requirements Model"
element_id: 1434274
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java

## 📝 Notes

The job that evaluates PER and COP services is now written in PLSQL and it checks debt catalogue version, where it may happen that a new debt catalogue is not yet commited to db in the time of service evaluation. As a consequence, services might be incorrectly evaluated as not eligible.

We want to rewrite the check to Java and check installment schedule directly, not debt catalogue (which makes sense also from modularization point of view).

## 🔗 Connections (3)

- ← Generalization: [[DEV REQ#2 Use new evaluation mechanism for manual contract finishing]]
- ← Generalization: [[DEV Rewrite DB evaluation of services from ODS to Java]]
- ← Generalization: [[DEV REQ#3 ODS Cleanup]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-2254 (CBL-5507) Rewrite DB evaluation of services to Java
