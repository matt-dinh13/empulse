---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673346
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Charging date is between original deposit date and current date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules

## 📝 Notes

Charging date has to be between min(IncomingPayment.depositDate, Contract. and current date.
Date on the ends of intervals are included.

MSG_ChargingDateMustBeInInterval

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Requirement 1673347)]]
- ← Dependency: [[Charging date on pair payment (Action 1673343)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
