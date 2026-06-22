---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874221
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Early Repayment Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

The entity keeps calculated values of outstanding debt on particular items as well as total amounts for Early Repayment. These items are divided to three groups:

	
- Overdue Items - unpaid amounts of installments after due date
	
- Payable Items - amounts of installments before due date which should be paid by Early repayment due date.
	
- ER fee - amounts of fees are to be charged for ER


Notice: This entity need not be stored in the system.

## 🔗 Connections (6)

- ← Dependency: [[ER request]]
- ← Dependency: [[ER processing]]
- ← Aggregation: [[Extraordinary Payable Items]]
- ← Aggregation: [[Payable Items (Class 1874230)]]
- ← Aggregation: [[ER Fee Items]]
- ← Aggregation: [[Overdue Items (Class 1874219)]]

## 📊 Appears In (2 diagrams)

- Logical: Early repayment result
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Total Extraordinary Payable Installments | Financial Amount |  |
| Contract | {MOD}Contract |  |
| ER Due Date | Date |  |
| ER Request Date | Date |  |
| Internal Refund | Financial Amount |  |
| Overpayment | Financial Amount |  |
| Total Future Payments | Financial Amount |  |
| Total Installment Amount | Financial Amount |  |
| Total Overdue Installments | Financial Amount |  |
| Total Payable Installments | Financial Amount |  |
| TotalToPaid | Financial Amount |  |
| GiftPaymentAmountExpected  | Financial Amount |  |
| Total Prepayments | Financial Amount |  |
| {ADD}TotalCancelledInsuranceAmounts | Financial Amount |  |
| {ADD}TotalInsuranceFeeAmountForRefund | Financial Amount |  |
| {ADD}TotalWaivedFeeAmount | Financial Amount |  |
