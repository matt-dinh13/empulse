---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model"
domain: "Analysis Model"
element_id: 1868575
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Service Offer Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model

## 📝 Notes

Installment which was offered to client at a loan service request
Entity is not persisted in DB

## 🔗 Connections (4)

- → Usage: [[Installment Type (Class 1833458)]]
- → Usage: [[Recalculation Reason (Class 1833457)]]
- → Aggregation: [[Loan Service Request (Class 1868549)]]
- ← Aggregation: [[Service Offer Installment Part]]

## 📊 Appears In (2 diagrams)

- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | DateTime |  |
| Active | Boolean |  |
| Due Date | Date |  |
| Due Date Customer | Date |  |
| Installment Number | Integer |  |
| Deactivated in Version | Number (4,0) |  |
| Installment Type | Installment Type |  |
| Recalculation Reason | Recalculation Reason |  |
| Installment Version | Number (4,0) |  |
