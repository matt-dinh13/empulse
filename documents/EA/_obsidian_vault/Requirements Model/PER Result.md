---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28112 (CSI-3764) PER setting and calculation update"
domain: "Requirements Model"
element_id: 1874324
diagrams: 3
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 PER Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28112 (CSI-3764) PER setting and calculation update

## 📝 Notes

The entity keeps calculated values of outstanding debt on particular items as well as total amounts for Partial Early Repayment. 

Notice: This entity need not be persisted in the system.

## 🔗 Connections (3)

- ← Dependency: [[Change PER result]]
- ← Aggregation: [[PER Fee Included In Operation Item]]
- ← Aggregation: [[PER Fee Item]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-28112 (CSI-4215) PER setting and calculation update
- Logical: PER Result
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract | {MOD}Contract |  |
| Client Amount | Financial Amount |  |
| PER Due Date | Date |  |
| PER Due Date Tolerance | Date |  |
| PER Recommended Date | Date |  |
| PER Request Date | Date |  |
| Minimal Amount To Pay | Financial Amount |  |
| NewTerm | int |  |
| New Monthly Installment | Financial Amount |  |
| Prepaid Amount | Financial Amount |  |
| Sum of PER Fees | Financial Amount |  |
| Total Overdue Installments | Financial Amount |  |
| Total Prepayments | Financial Amount |  |
| Total To Paid | Financial Amount |  |
| Nearest Payable Installment | Financial Amount |  |
| PER Type | PER Type |  |
| Is Available | boolean |  |
| Notification | int |  |
| Client Minimal Amount | Financial Amount |  |
| Client Maximal Amount | Financial Amount |  |
| Minimal PER Request Amount | Financial Amount |  |
| {MOD}Maximal PER Request Amount | Financial Amount |  |
| {ADD}Interest Back Amount | Financial Amount |  |
