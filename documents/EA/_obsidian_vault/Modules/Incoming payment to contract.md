---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model"
domain: "Modules"
element_id: 1880270
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Incoming Payment To Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/COMMON for Incoming Payments/Logical Data Model

## 📝 Notes

Keeps information about contract (REL/CEL) to which is a payment paired.

## 🔗 Connections (3)

- → Association: [[Contract (Class 1880266)]]
- → Dependency: [[Incoming Payment Pairing Reason (Class 1880262)]]
- ← Association: [[Incoming Payment (Class 1880259)]]

## 📊 Appears In (1 diagrams)

- Logical: Incoming payments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active | boolean |  |
| Pairing Reason | Incoming Payment Pairing Reason  |  |
| Created By | User |  |
| Created When | DateTime |  |
