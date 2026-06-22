---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877501
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Date of latest payment calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

System finds the latest payment paid by customer on the contract (max(INCOMING_PAYMENT.DEPOSIT_DATE) where INCOMING_PAYMENT.STATUS = "A - Active" and INCOMING_PAYMENT.CONTRACT = current contract) and takes its date (INCOMING_PAYMENT.DEPOSIT_DATE) as a result.

If no incoming payment is found, the result is null.

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Incoming payment calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
