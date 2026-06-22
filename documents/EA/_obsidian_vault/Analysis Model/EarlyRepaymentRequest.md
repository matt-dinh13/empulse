---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850941
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 EarlyRepaymentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 📝 Notes

Client's request entity for possibility to repay whole debt (per one contract) before last installment due date.

## 🔗 Connections (4)

- → Dependency: [[PerVariantType]]
- ← Dependency: [[LoanServiceRequest]]
- → Generalization: [[Loan Service Request (Class 1868549)]]
- → Dependency: [[CetVariantType]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cetVariant | CET Variant |  |
| perVariant | PerVariantType |  |
| earlyRepaymentDate | Date |  |
| earlyRepaymentDateTolerance | Date |  |
| recommendedDate | Date |  |
| communicatedAmount | Financial amount |  |
| maxAcceptableDebt | Financial amount |  |
| minimalAmountToPay | Financial Amount |  |
| totalFees | Financial Amount |  |
| reason | Contract Status Transitions Reasons |  |
| recalculationReason | Recalculation Reason |  |
| cancelInsurance | boolean |  |
