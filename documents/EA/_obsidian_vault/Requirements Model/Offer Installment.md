---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1878169
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Offer Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Installment which was offered to client before concrete installment schedule was chosen

## 🔗 Connections (3)

- ← Aggregation: [[Offer Installment Part]]
- → Dependency «use»: [[Installment Type (Class 1833458)]]
- → Aggregation: [[Offer Financial Parameter]]

## 📊 Appears In (4 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Installment Schedule
- Logical: Offer Financial Parameters
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Installment Type | Installment Type |  |
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Due Date | Date |  |
| Due Date Customer | Date |  |
| Installment Number | Number (4,0) |  |
| Recalculation Reason | Recalculation Reason |  |
