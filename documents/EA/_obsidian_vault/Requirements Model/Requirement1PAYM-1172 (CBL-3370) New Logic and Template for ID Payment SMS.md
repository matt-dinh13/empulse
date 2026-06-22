---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS"
domain: "Requirements Model"
element_id: 1336132
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement1PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS

## 📝 Notes

BSL will send PairedPaymentNotification JMS message with parameters:

	
- contractCode – external identifier of a contract, not null
	
- cuid – external identifier of a client, not null
	
- eventType – specification of a template (from the list below), not null
	
- PairedPaymentNotification.paymentAmount
	
- repaidInstallmentNumber
	
- remainingInstallments
	
- nextInstallmentAmount
	
- nextDueDate
	
- remainingOverdueDebt


Queue:

Templates:
1. LAST_INSTALLMENT_FULLY_PAID

Descripiton: All installments of a contract have been fully paid (considering “small underpayment” tolerance).

ID: Yth ${title} ${clientName}, telah diterima pembayaran angsuran ke-{numberOfInstallment} Rp${paymentAmount} untuk kontrak ${contractCode}. Terima kasih. Info bit.ly/My-HCI

EN example (for better understanding): Dear Ms Client, we have received a payment for the 18th installment with amount Rp1.000.000 for contract 3617283918. Thank you. Info bit.ly/My-HCI

2. INSTALLMENT_FULLY_PAID_WITH_PENALTY

Description: A non-last installment has been fully paid and there is an Invoice penalty charged in the future. We want to inform a client about the next regular installment amount and due date and about the fact that there is a penalty charged in the future.

ID: Yth ${title} ${clientName},tlh diterima pbyrn Rp${paymentAmount} kntrk ${contractCode},sisa ${remainingInstallment} angs & denda 1x angs. Angs brktnya Rp${nextInstallmentAmount} mhn byr pd ${nextDueDate – 3days}.Info bit.ly/My-HCI

EN example (for better understanding): Dear Ms Client, we have received payment Rp1.000.000 for contract 3617283918, remaining 10 installment & 1 penalty. Next installment is Rp1.000.000 please pay it on 01-10-18.Info bit.ly/My-HCI

3. INSTALLMENT_FULLY_PAID

Description: A non-last installment has been fully paid and there is no Invoice penalty charged in the future. We want to inform a client about the next regular installment amount and due date.

ID: Yth ${title} ${clientName},tlh diterima pbyrn Rp${paymentAmount} kntrk ${contractCode},sisa ${remainingInstallment} angs. Angs brktnya Rp${nextInstallmentAmount} mhn byr pd ${nextDueDate – 3days}.Info bit.ly/My-HCI

EN example (for better understanding): Dear Ms Client, we have received payment Rp1.000.000 for contract 3617283918, remaining 10 installment. Next installment is Rp1.000.000 please pay it on 01-10-18.Info bit.ly/My-HCI

4. INSTALLMENT_PARTIALLY_PAID

Description: An installment has been partially paid. We want to remind a client to pay the rest in time.

ID: Yth ${title} ${clientName},telah diterima pembayaran Rp${paymentAmount} kontrak ${contractCode}, angsuran blm dibyr penuh. Mohon bayar Rp${nextInstallmentAmount} sblm ${nextDueDate – 3 days}.Info bit.ly/My-HCI

EN example (for better understanding): Dear Ms Client, we have received payment Rp1.000.000 for contract 3617283918, installment is not fully paid. Please pay Rp1.000.000 before 01-10-18. Info bit.ly/My-HCI

5. DPD_INSTALLMENT_PAID

Description: An overdue installment has been fully/partially paid. We want to remind a client to pay their outstanding debt as soon as possible.
ID: Yth ${title} ${clientName}, trm ksh atas pbyrn Rp${paymentAmount} kontrak ${contractCode}, sisa ${remainingInstallment} angs lg.Angs yg msh tertunda Rp${remainingOverdueDebt} mhn byr hr ini.Info bit.ly/My-HCI

EN example (for better understanding): Dear Ms Client, thank you for payment Rp1.000.000 for contract 3617283918, remaining 10 installments.Outstanding installment is Rp1.000.000 please pay today.Info bit.ly/My-HCI

6. DPD_INSTALLMENT_PAID_AND_INCLUDE_NEXT

Description: An overdue installment has been fully/partially paid. We want to remind a client to pay their outstanding debt as soon as possible. As the next future installment is due in less than 8 days we also ask a client to pay it together with their outstanding debt at once (remainingOverdueDebt + nextInstallmentAmount).

ID: Yth ${title} ${clientName}, trm ksh atas pbyrn Rp${paymentAmount} kntrk ${contractCode}, sisa ${remainingInstallment} angs lg.Mhn segera byr angs tertunda Rp${remainingOverdueDebt + nextInstallmentAmount} & angs brktnya.Info bit.ly/My-HCI

EN example (for better understanding): Dear Ms Client, thank you for payment Rp1.000.000 for contract 3617283918, remaining 10 installments.Please pay remaining installment Rp11.000.000 and next installment.Info bit.ly/My-HCI

Conditional logic:
Selection of an appropriate template to be used will be done in BSL, result will be communicated in the eventType parameter of the JMS message.

## 🔗 Connections (1)

- ← Generalization: [[PairedPaymentNotification]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS
