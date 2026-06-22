---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874227
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Early Repayment Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

Client's request entity for possibility to repay whole debt (per one contract) before last installment due date.

## 🔗 Connections (5)

- ← Association: [[FullEarlyRepaymentRequestedSE]]
- → Dependency: [[Contract Status Transitions Reasons]]
- → Dependency: [[CET Variant]]
- → Generalization: [[Loan Service Request (Class 1868549)]]
- → Dependency: [[PER Type]]

## 📊 Appears In (3 diagrams)

- Logical: Early repayment request
- Logical: Loan Service Request domain
- Logical: Others

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CET Variant | CET Variant |  |
| Communicated Amount | Financial amount |  |
| Early Repayment Date | Date |  |
| Early Repayment DateTolerance | Date |  |
| Max Acceptable Debt | Financial amount |  |
| Minimal Amount To Pay | Financial Amount |  |
| PER Type | PER Type |  |
| Reason | Contract Status Transitions Reasons |  |
| Recommended Date | Date |  |
| Total Fees | Financial Amount |  |
| Recalculation Reason | Recalculation Reason |  |
| {ADD}Cancel Insurance | boolean |  |
