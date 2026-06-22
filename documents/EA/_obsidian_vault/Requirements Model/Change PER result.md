---
type: Change
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment"
domain: "Requirements Model"
element_id: 1391717
diagrams: 1
connections: 4
tags:
  - change
  - requirements-model
---

# 📄 Change PER result

> **Type**: Change · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📝 Notes

Minimal amount to pay
Minimal Amount To Pay = PER Service.Minimal Amount Rate * Financial Parameters.Total Monthly Payment + Total Overdue Installments + Nearest Payable Installments till PER Due Date;
where Nearest Payable Installment is taken as:

	
- Sum of all unpaid Installment Parts of Installment Schedule (IP.AMOUNT – IP.AMOUNT_PAID) having Due Date between PER Request Date and PER Due Date (i.e. INSTALLMENT_PARTs belongs to INSTALLMENTs which have I.DUE_DATE between PER Request Date and PER Due Date and I.ACTIVE = 'TRUE')


Prepaid amount
Total amount of installments paid before due date. 
Prepaid Amount = Sum of Installment Part paid (Installment Part.Amount Paid) where Installment .Due Date >= ERDD an Active Flag = 1

Total overdue installments
Sum of overdue installments with due date < PER Request Date. All types installment parts except 'Overpayment' are involved here.
Total Overdue Installments = Sum of all unpaid Installment Parts of Installment Schedule (IP.AMOUNT – IP.AMOUNT_PAID) having due date < PER Request Date (i.e. INSTALLMENT_PARTs belongs to INSTALLMENTs which have I.DUE_DATE < PER Request Date and I.ACTIVE = 'TRUE')

Total to paid
Total amount for PER payment.
Total To Paid = Client Repayment - Prepaid Amount
If the result is negative, Total To Paid = 0

## 🔗 Connections (4)

- → Dependency: [[08.053 Create PER request manually]]
- → Dependency: [[PER Result]]
- ← Dependency: [[REQ 2.2 PER request]]
- ← Dependency: [[REQ 2.1 PER preview]]

## 📊 Appears In (1 diagrams)

- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
