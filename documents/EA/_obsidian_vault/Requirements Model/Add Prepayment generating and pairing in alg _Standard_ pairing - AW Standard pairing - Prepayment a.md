---
type: Requirement
stereotype: "Report"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job"
domain: "Requirements Model"
element_id: 1360927
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Add Prepayment generating and pairing in alg "Standard" pairing - AW Standard pairing - Prepayment active

> **Type**: Requirement · **Stereotype**: «Report»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1885 (CBL-4285) - Pairing time for payment made before due date - instalment schedule generating, payments pairing, daily pairing job

## 📝 Notes

There are defined two payment pairing algorithms that can be chosen by Terms and Condition.Keep Pairing Priority flag:

	
- Standard pairing – it re-pairs already paired payment when an installment part is not paired by pairing priority rules, or an installment is removed. Only one "overpayment" installment is created for all payments which are received on repaid contract.
	
- Keep pairing priority – it performs re-pairing only if payments are not paired chronologically, or an installment is removed. Next "overpayment" installment is created for each payment separately.

After that all the system generates a system event IncomingPaymentPairingChangedCELSE.

----------------------------------------------------------------------------------------
NOTE: OVERPAYMENTS/PREPAYMENTS IS CREATED AS SUM OF OVERPAYMENT/PREPAYMENT AMOUNT, not as single overpayment/prepayment for each incoming payment

1. Find all active payments paired with the provided Contract (INCOMING_PAYMENT.CONTRACT = provided contract and INCOMING_PAYMENT.STATUS = “active”) having all pairing records unlocked (i.e. Incoming Payment Pairing.Locked = FALSE and Archive = FALSE) and put them into the set to set of payments to be re-paired.

2. If exist incorrectly paired active payments (payments are not paired chronologically to installment parts in appropriate order or exist payments without pairing records, see ALG_Get sorted installment parts)
{ADD PAYM-1884} or exists installments paid before its due date {/ADD PAYM-1884}
2.1  Call 05.200 Perform decoupling  with payments paired after last correctly paired payment.
2.2  Add these payments to set to be re-paired.

{DEL PAYM-1885 CBL-4285}//overpayment/prepayment installments cancelled within UC05.200 Perform decoupling
3. If exist active overpayment installments (with installment part type = “overpayment”) 
3.1 Add these payments to Payment to Pairing collection  to be re-paired.
3.2 Call 03.095 Remove installment  for each one of found overpayment.
{DEL PAYM-1885 CBL-4285}

4. Sort payments in the Payment to Pairing collection  by deposit date ascendant (INCOMING_PAYMENT.DEPOSIT_DATE) 
5. Get sorted contract Installment Parts and set as sorted Installment Parts To Pairing by ALG_Get sorted installment parts algorithm with Payment.Deposit Date as parameter.

6. Set OverPaymentAmount = 0 and PrepaymentAmount = 0

7. For each Payment from the Payment to Pairing collection, taken from the oldest one:
7.1. Set money = Payment.Amount
7.2. For each not fully paired InstallmentPart from the Installment Parts To Pairing  where currency is same as payment currency {ADD PAYM-1884} and due date <= current date) {/ADD PAYM-1884}
7.2.1 Compute settled amount of InstallmentPart as settled amount = MIN(money, InstallmentPart.Amount – InstallmentPart.AmountPaid).
7.2.2. Call Pair Installment Part alternate with parameter: settled amount
7.2.3. Calculate and store date from which the installment is considered as paid in tolerance for collection - optimization
If the installment of InstallmentPart is paid in debt tolerance (Sum(Installment Part.Amount - Installment Part.Amount Paid) <= ParamDebtToleranceAmount) then update list of paid after due date installments:
If Payment.Deposit Date <= installment.Due Date then remove installment from Debt Installment, otherwise insert or update installment in Debt Installment and set Paid Date to Payment.Deposit Date

7.2.5 Set money = money – settled amount
7.2.6 If money <= 0 then exit for each
-end for each not fully paired installment parts
{ADD PAYM-1884}
7.3 if money > 0 and exists Unpaid Installment with due date > current date then
PrepaymentAmount = PrepaymentAmount + money
Money = Money - Prepayment
- end for each payment
{/ADD PAYM-1884}
7.4  If money > 0 {ADD PAYM-1884} and not exists Unpaid instalment with due date > current date {/ADD PAYM-1884} then set OverPaymentAmount = OverPaymentAmount + money.
-end for each payment

//notes
when the payment is being paired to particular instalment parts:
if prepayment is active
     - iterate through the due instalments and pair the payment to due instalment parts
     - when there is no more due instalments and exists at least one instalment due in future and there is still remaining unpaired amount on incoming payment
          - add the rest of payment amount to Overpayment amount
     - end of particular incoming payment pairing, go to next incoming payment pairing
     - newly created Prepayment instalment (due date = current date, amount = Overpayment amount) is created and remaining not paired amounts of all contract´s active incoming payments are paired to this installment
     - no overpayment is created while exists at least one active unpaid instalment due in future
     - when there is no more active unpaid instalments on the contract, the remaining not paired amount of incoming payments is paired to overpayment and no prepayment exists
else if prepayment is not active
     - iterate through the due instalments and pair the payment to due instalment parts
     - when there is no more instalments to be paid and there is still remaining unpaired amount on incoming payment
          - pair the rest of payment amount to newly created Overpayment instalment (due date = deposit date of incoming payment)
     - end of particular incoming payment pairing, go to next incoming payment pairing
     - no prepayment is created
//

8. {ADD PAYM-1884} PrepaymentAmount > 0 then
8.1 Create installment Prepayment by calling 03.080 Add installment with parameters:

	
- current date as due date
	
- installment part type as “Prepayment (PP)”,
	
- installment amount as PrepaymentAmount,
	
- contract id as provided contract id

8.2  For each payment not fully paired from the set of payments to be re-paired, taken from the oldest one:
8.2.1 Calculate PaymentPairingAmount for payment as a difference between IncomingPayment.Amount and sum of related IncomingPaymentPairing.PairingAmount.
8.2.2 Create coupling record of payment and installment part and set IncomingPaymentPairing.PairingAmount to PaymentPairingAmount.
-end for each payment
8.3 Set for overpayment installment
- InstallmentPart.FullyPaidDate to current date
- InstallmentPart.AmountPaid to OverPaymentAmount


9. If OverPaymentAmount  > 0 then
9.1 Create installment overpayment by calling 03.080 Add installment with parameters:

	
- current date as due date
	
- installment part type as “overpayment”,
	
- installment amount as OverPaymentAmount,
	
- contract id as provided contract id

9.2  For each payment not fully paired from the set of payments to be re-paired, taken from the oldest one:
9.2.1 Calculate PaymentPairingAmount for payment as a difference between IncomingPayment.Amount and sum of related IncomingPaymentPairing.PairingAmount.
9.2.2 Create coupling record of payment and overpayment and set IncomingPaymentPairing.PairingAmount to PaymentPairingAmount.
-end for each payment
9.3 Set for overpayment installment
- InstallmentPart.FullyPaidDate to current date
- InstallmentPart.AmountPaid to OverPaymentAmount  

10. Scenario continues with next step of the Basic Path (all payments from Payment to pairing set are processed)

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
