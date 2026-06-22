---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Logical Data Model"
domain: "Analysis Model"
element_id: 1874507
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Interest Back Period

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Logical Data Model

## 📝 Notes

{ADD IS-2617} {PH only}

## 🔗 Connections (3)

- → Dependency: [[Period Status]]
- → Aggregation: [[Interest Back Request]]
- → Dependency: [[Period Status Reason]]

## 📊 Appears In (1 diagrams)

- Logical: Interest Back 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Related Installment Number | int |  |
| Related Installment Due Date | Date |  |
| Status | Period Status |  |
| Interest Back Amount | Financial Amount |  |
| Period due date | Date |  |
| Status Reason | Period Status Reason |  |
| Evaluation Date | Date |  |
| Minimal installment amount | Financial Amount |  |
| Related Payment Data Exchange ID | string |  |
| Related Payment Stource System | String |  |
