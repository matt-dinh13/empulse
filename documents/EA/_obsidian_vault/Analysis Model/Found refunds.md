---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds"
domain: "Analysis Model"
element_id: 1845221
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Found refunds

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds

## 📝 Notes

Grid with found refund items.
The results are grouped by contracts, i.e. one row represents all refund within one contract (i.e. RefundItem with the same value of RefundItem.ContractCode).

Number of results is defined by Search with unlimited number of results.

## 🔗 Connections (1)

- → Dependency: [[05.512 Show contract refund items (UseCase 1877128)]]

## 📊 Appears In (1 diagrams)

- Custom: Browse refunds

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract number | Text |  |
| Total to refund | Financial Amount |  |
| Already refunded | Financial Amount |  |
| Remaining | Financial Amount |  |
| Actions | buttons |  |
| {ADD}Creation date | Date Time |  |
