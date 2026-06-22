---
type: Requirement
stereotype: "Display"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job"
domain: "Requirements Model"
element_id: 1360920
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Add Prepayment generating and pairing in alg "Keep pairing priority" pairing - AW Standard pairing - Prepayment active

> **Type**: Requirement · **Stereotype**: «Display»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job

## 📝 Notes

There are defined two payment pairing algorithms that can be chosen by Terms and Condition.Keep Pairing Priority flag:

	
- Standard pairing – it re-pairs already paired payment when an installment part is not paired by pairing priority rules, or an installment is removed. Only one "overpayment" installment is created for all payments which are received on repaid contract.
	
- Keep pairing priority – it performs re-pairing only if payments are not paired chronologically, or an installment is removed. Next "overpayment" installment is created for each payment separately.

After that all the system generates a system event IncomingPaymentPairingChangedCELSE.

----------------------------------------------------------------------------------------

Input parameters:

	
- Contract
	
- GET_OVERPAYMENT_DUE_DATE - a value is obtained from the Global Parameters entity


1. Find all active payments paired with the provided Contract (INCOMING_PAYMENT.CONTRACT_ID = provided contract ID and INCOMING_PAYMENT.STATUS = ‘ACTIVE’) which are not paired, or partially paired to an installment (they do not have an active record in Incoming Payment Pairing) {ADD PAYM-1884} or exists incoming payment paired partially or fully to Prepayment installment part {/ADD PAYM-1884} and set them into a Payment to Pairing collection 

2. If the payments are not paired chronologically to installment parts, i.e. 

	
- either a payment paired with installment has deposit date newer than an unpaired payment with the oldest due date from Payment to Pairing collection
	
- or  an unpaired/partially paired installment exists before the first paired installment
	
- {ADD PAYM-1884} or a payment has active pairing to installment paired before its due date
	
- or a incoming payment is partially or fully paired to Prepayment installment {/ADD PAYM-1884}

then
2.1  Call 05.200 Perform decoupling with a set of payments paired after the last correctly paired payment. (TO CHECK IN THE CODE what means last correct paired payment)
2.2  Add these unpaired payments to the Payment to Pairing collection. (It means, still paired payments, e.g. due to a lock on pairing record), are not added here)

3. Sort payments in the Payment to Pairing collection by deposit date ascendant (INCOMING_PAYMENT.DEPOSIT_DATE) 

7. For each Payment from the Payment to Pairing collection, taken from the oldest one:
7.1a Get all unpaid (not fully paired) Installment Parts  of the contract and set as sorted Installment Parts To Pairing by pairing algorithm according to the system setting below with InstallmentPartsToPairing collection and Payment.Deposit Date as parameters: 
----if global parameter SortInstalmentPartsBySpecificDate = FALSE, then the system uses ALG_Get sorted installment parts algorithm 
----if global parameter SortInstalmentPartsBySpecificDate = TRUE, then the system uses ALG_Get sorted installment parts by specific date algorithm 
7.1b For the sorted installment parts the system excludes {ADD PAYM-1884} installments type Prepayment and {/ADD PAYM-1884} items according to the rule Exclude specific installment parts from pairing.
7.2 Set money = IncomingPayment.Amount


7.3 For each not fully paired Installment Part in the Installment Parts To Pairing where currency is same as payment currency: 
7.3.1 Compute settled amount of Installment Part as settled amount = MIN (money, InstallmentPart.Amount – InstallmentPart.AmountPaid).
7.3.2 Call Pair Installment Part alternate with parameter: settled amount
7.3.3 Set money = money – settled amount
7.3.4 If money > 0 then take next Installment Part in step 7.3
7.3.5 If money <= 0 then take next Payment in step 7 

{ADD PAYM-1884} --create Prepayment for the rest of payment amount and go to next payment
7.4 If money > 0 and not exists due (Installment.DueDate <= current date) instalment part in InstallmentPartsToPairing
7.4.1 create installment of overpayment type by calling 03.080 Add installment with parameters:

	
- PrepaymentInstallment.Due Date as IncomingPayment.DepositDate
	
- installment part type as “Prepayment”,
	
- installment amount as money,
	
- contract id as provided Contract id

7.4.2 Call Pair Installment Part alternate with parameter: settled amount = money
7.4.3 Take next Payment in step 7

{/ADD PAYM-1884}

7.5  If money > 0 {ADD PAYM-1884} and not exists Unpaid instalment with due date > current date {/ADD PAYM-1884} then --create OverpaymentInstallment for the rest of payment amount and go to next payment
7.5.1 If GET_OVERPAYMENT_DUE_DATE = TRUE then it is continued with AW Get overpayment due date alternate
7.5.2 Else OverpaymentInstallment.Due Date = Payment.Deposit Date
7.5.3 create installment of overpayment type by calling 03.080 Add installment with parameters:

	
- OverpaymentInstallment.Due Date as Due Date
	
- installment part type as “Overpayment”,
	
- installment amount as money,
	
- contract id as provided Contract id

7.6.1 Call Pair Installment Part alternate with parameter: settled amount = money

7.6 Take next Payment in step 7 

8. Scenario continues with next step of the Basic Path (all payments from Payment to pairing set are processed)

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
