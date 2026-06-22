---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877487
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Sum of incoming payments calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

System finds all the incoming payments paid by customer from the beginning of the contract and takes its sum as a result):
sum(INCOMING_PAYMENT.AMOUNT) from payments where INCOMING_PAYMENT.STATUS = "A - Active" and INCOMING_PAYMENT.CONTRACT = current contract

If no incoming payment is found, the result is null.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Incoming payment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
