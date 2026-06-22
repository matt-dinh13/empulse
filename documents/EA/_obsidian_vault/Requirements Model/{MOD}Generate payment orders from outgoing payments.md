---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1097 (CBL-1093) Loan disbursement to any card"
domain: "Requirements Model"
element_id: 1878537
diagrams: 2
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Generate payment orders from outgoing payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1097 (CBL-1093) Loan disbursement to any card

## 📝 Notes

Input:

	
- set of outgoing payments (OUTGOING_PAYMENT) (with theirs data loaded)

Output:

	
- Set of created payment orders (OUTOING_PAYMENT_ORDER)


-- Pre-processing:
1. System takes next unprocessed payment from the set of outgoing payments (further referred as set). If all payments in the set have been processed continue to step 4.

2. System verifies payment status (OUTGOING_PAYMENT.STATUS). If status is not "order generating" remove payment from the set and continue to step 1.

3. System checks that OutgoingPayment->Payment Channel.Status Of Last Change Request is not in ({DEL PAYM-2018 CBL-5325}NEW, {/DEL}REJECTED). If the validation does not pass, the system removes payment from the set and continue to step 1.

4. {ADD PAYM-2018 CBL-5325}If OutgoingPayment->Payment Channel.Status Of Last Change Request = NEW then system sets OutgoingPayment.Status to 'U' (Unpaid).{/ADD}

{ADD CBL-12140 PAYM-3532}
5. If BIND_PTR_TO_SUBV = 1 then: for PTR payments, system checks whether there is related SVP payment in ptr2subvention. If found, system add SVP ContractInfoPaymentSubvItemto the order.

6. System determines recipient's data - see rule Get recipient data
{DEL CBL-1093}If recipient's bank account is not found then set payment status (OUTGOING_PAYMENT.STATUS) to last previous status and remove payment from the set.{/DEL}

7. Until all payments are processed, it is continued with step 1.


-- Processing - group payments:

	
- 1. System groups payments in the set by{ADD CBL-1093}
- recipient's data.recBankAccountNumber + recipient's data.recBankCode  ...can be null
- recipient's data.externalCardID ...can be null
- Outgoing Payment.amount.currency
{/ADD}
{DEL CBL-1093}account and by payment currency{/DEL}



--- Processing each group of payments:
1. System generates a new outgoing payment order (OUTOING_PAYMENT_ORDER) and set its attributes as follows:

	
- amount (OUTGOING_PAYMENT_ORDER.AMOUNT = sum of amounts of payments in the group.
	
- account (OUTGOING_PAYMENT_ORDER.BANK_ACCOUNT = account of the group
	
- transaction time (OUTGOING_PAYMENT_ORDER.TRANSACTON_TIME) = current time
	
- external ID (Outgoing Payment Order.ExternalID = value defined by Payment Order identifier definition - general
	
- Recipient Name from step #3 (Outgoing Payment Order.Recipient Name)
	
- List of payments = payments in processed group

2.    System gets first OutgoingPayment and gets is PaymentChannel->Salesroom. 
        If Salesroom[from first payment]->SalesroomToBankAccount{DEL CBL-3607 PAYM-1428}->BankAccount{/DEL}.ForPayments = true, then 
           OutgoingPaymentOrder.salesroom =  Salesroom[from first payment].
        Otherwise set  OutgoingPaymentOrder.partner = Salesroom[from first payment]->Partner


2. System sets status (OUTGOING_PAYMENT.STATUS) of all outgoing payments in the group to "Paid". If outgoing payment has refund, system sets Refund_Item.Status = REFUNDED.

3. if GlobalParameter.IsOBS = False (or NULL) then 
For each outgoing payment in the group of "payment to insurance company" type (OutgoingPayment.paymentType ='INS') having related Contract -> Insurance Contract -> Insurance Program{ADD CSI-548}[Code, Version Number =  Insurance Contract.InsuranceProgramExternalId]{/ADD} .Register Inclusion Date Calculation = "DAY OF INSURANCE DISBURSEMENT"
- set Insurance Contract.Insurance Period.Register Inclusion Date = Outgoing Payment Order.Transaction Time for active Insurance Period having End Date >= current date

## 🔗 Connections (6)

- → Dependency: [[Requirement3 - Not generate outgoing payment orders if there is an unprocessed DCH request]]
- → Dependency: [[Requirement3 - Generate outgoing payment orders with settlements]]
- → Dependency: [[Requirement3 - Outgoing Payment Orders and Files]]
- → Dependency: [[Payment Order identifier definition - general]]
- → Dependency: [[{MOD}Get recipient data]]
- ← Dependency: [[{MOD}05.230 Process outgoing payments]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1097 (CBL-1093) Loan disbursement to any card
- Use Case: Process outgoing payments
