---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Logical Data Model"
domain: "Analysis Model"
element_id: 1867084
diagrams: 7
connections: 19
tags:
  - class
  - analysis-model
---

# 🔷 Tariff Item Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Logical Data Model

## 📝 Notes

This entity defines basic behavior of all fee/penalty types which serves as template for creating Tariff Items in a Tariff.

## 🔗 Connections (19)

- ← Dependency: [[Presented IR Fee]]
- ← Dependency: [[Grace Period REL To Tariff Item Type]]
- ← Dependency: [[Excluded Fees Base]]
- ← Dependency: [[Excluded Fees Base]]
- ← Dependency «use»: [[Amortized Installment Part]]
- ← Dependency «use»: [[Installment Priority]]
- ← Association: [[Installment Included In Operation]]
- ← Association: [[Time Allocation]]
- ← Dependency: [[Type (GUIElement 1866985)]]
- → Dependency: [[Effective Date Type]]
- → Dependency: [[Tariff Item Category]]
- ← Dependency: [[{MOD}Tariff Item]]
- ← Dependency: [[Tariff Item Group 2 Tariff Item Type Configuration]]
- → Dependency: [[Charging Periodicity Type]]
- → Association: [[Tariff Item Type]]
- ← Association: [[Tariff Item Type]]
- → Association: [[Tariff Item Type Flag]]
- → Dependency: [[Tariff Item Usage]]
- → Dependency: [[Accounting Representation]]

## 📊 Appears In (7 diagrams)

- Logical: Contract Write-off domain model
- Logical: Fees and Penalties in context
- Logical: Fees excluded from percentage base calculation
- Logical: Grace period for REL
- Logical: Installment Schedule
- Logical: Presented interest rate - Interface
- Logical: Tariff and Tariff Item Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active | boolean |  |
| Accounting Representation | Accounting Representation |  |
| Category | Tariff Item Category |  |
| Description | Text |  |
| Usage | Tariff Item Usage |  |
| Print Order | Number (2,0) |  |
| Service Lock | Text |  |
| Charging Periodicity | Charging Periodicity Type |  |
| Effective Date | Effective Date Type |  |
