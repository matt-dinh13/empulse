---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Validation rules"
domain: "Analysis Model"
element_id: 911906
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Charging date is between original deposit date and current date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Validation rules

## 📝 Notes

Charging date has to be between original deposit date (i.e. Incoming Payment.chargingDate) and current date.
Date on the ends of intervals are included.

MSG_ChargingDateMustBeInInterval

## 🔗 Connections (1)

- ← Dependency: [[Charging date on pair payment]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
