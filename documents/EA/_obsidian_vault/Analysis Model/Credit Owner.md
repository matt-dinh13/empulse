---
type: Class
stereotype: "enum"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1880199
diagrams: 5
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Credit Owner

> **Type**: Class · **Stereotype**: «enum»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

This enumeration is used to keep record of all companies which may own or co-own loan contracts in BSL.
Enumeration is used also for other type of roles than just credit (co)owner - original name Credit Owner kept for compatibility reasons, but alias Party added.

## 🔗 Connections (4)

- ← Dependency: [[SecuritizationTranche]]
- ← Dependency: [[{ADD}JFC Partner Code To Bank Account]]
- ← Association: [[Contract Sale (Class 1851448)]]
- ← Dependency: [[Contract Ownership]]

## 📊 Appears In (5 diagrams)

- Logical: Automatic source bank account assignment - OP orders
- Logical: Contract - Party roles
- Logical: Contract ownership
- Logical: Contract sale - Domain model
- Logical: Contract securitization - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Name |  |
