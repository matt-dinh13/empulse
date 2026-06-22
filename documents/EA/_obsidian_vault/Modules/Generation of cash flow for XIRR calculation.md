---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation"
domain: "Modules"
element_id: 1121364
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Generation of cash flow for XIRR calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation

## 📝 Notes

Input: 
- Financial parameters of offer/contract (FP)
- Type of calculation (XIREL1 or XIREL2)

Output: 
- Cash flow (date, financial amount)

Simplifications: 
- base for interest calculation is fixed in algorithm for PIR calculation,
- maintenance fee is always defined as percentage from remaining balance of initial and next transaction
- minimal installment is always defined as percentage and base for minimal installment calculation is fixed in algorithm for PIR calculation
- days in year are fixed to 365
- insurance fee is included in principal and charged once a year at start of year
- only one type of insurance is supported
- next insurance amount is calculated as first insurance amount * (provided credit limit / net credit limit) 

Find initial parameters for cash flow generation according to the rule Collection of initial parameters for XIREL calculation, which returns:

	
- TranInitIR - interest rate for initial transaction
	
- TranIR - interest rate for next transaction
	
- InsurIR - interest rate for next insurance transaction
	
- TranInitAmount - amount of initial transaction
	
- InsurInitAmount - amount of the 1st insurance transaction
	
- TranAmount - amount of next transaction
	
- InsurAmount - amount of the next insurance transaction
	
- TotalCreditLimit - total credit limit
	
- MaitenanceFeeRate - maintenance fee rate
	
- MaintenanceFeeInit - flag defining whether (initial transaction + insurance fee) are included in base for maintenance fee calculation
	
- MinInstallmentAmount - minimal installment amount
	
- StartDate - start date for evaluation, moment of loan disbursement
	
- InitialBillingDate - initial billing date 
- can be before StartDate, 
- next BillingDate is generated as date with the same day a month later

The values reflect Initial Transaction Type and Zero Promo service assignment.

// In case of product without initial transaction XIREL1 is calculated like XIREL2.
If TypeOfCalculation on input = XIREL1 and TranInitAmount > 0 then TranAmount = 0

System generates cash flow in following structure (balances refer to status after payment):

	
- Date
	
- TranInitBalance - balance of the first transaction (without insurance) 
	
- TranBalance - balance of the next transaction
	
- InsurBalance - balance of insurance premium
	
- InterestAndFeeBalance - balance of unpaid interests and fees
	
- CashFlowAmount


First row of cash flow is defined as follows:

	
- Date[1] = StartDate
	
- TranInitBalance[1] = TranInitAmount
	
- TranBalance[1] = TranAmount
	
- InsurBalance[1] = InsurInitAmount


	
- InterestAndFeeBalance[1] = 0


	
- CashFlowAmount[1] = - (TranInitBalance + TranBalance + InsurBalance)


Next rows of cash flow are generated as follows:

	
- Date[i] = next BillingDate after Date[i-1]
	
- // calculation of monthly fee
MaintenanceFeeBase = TranBalance[i - 1] 
If MaintenanceFeeInit = true then MaintenanceFeeBase =MaintenanceFeeBase + TranInitBalance[i - 1] + InsureBalance[i - 1]
MaintenanceFeeAmount = MaitenanceFeeRate * MaintenanceFeeBase
	
- // length of period for charging of interests
DaysNumber = number of days between Date[i-1] and Date[i]
	
- // interest calculation from initial transaction, next transaction and insurance
TranInitInterest = TranInitBalance[i - 1] * DaysNumber/365 * TranInitIR 
TranInterest = TranBalance[i - 1] * DaysNumber/365 * TranIR
InsurInterest = InsurBalance[i - 1] * DaysNumber/365 * InsurIR
	
- SumInterestAndFee = TranInitInterest + TranInterest + InsurInterest + MaintenanceFeeAmount
	
- // annual insurance premium at anniversary of the first billing date
AdditiveInsurBalance = 0
InsurAniversaryMonth = number of months between (Date[2], Date[i])
If InsurAniversaryMonth > 0 and MODULO(InsurAniversaryMonth/12) = 0 then AdditiveInsurBalance = InsurAmount
	
- // total debt before payment
TotalToPay = TranInitBalance[i-1] + TranBalance[i-1] + InsurBalance[i-1] + InterestAndFeeBalance[i-1] + SumInterestAndFee + AdditiveInsurBalance 
	
- // installment
InstallmentAmount = MinInstallmentAmount 
If TotalToPay < MinInstallmentAmount then InstallmentAmount =TotalToPay
PayAvailableAmount = InstallmentAmount 


	
- CashFlowAmount[i] = InstallmentAmount - AdditiveInsurBalance 


	
- // repayment of interests and fees balance
PayAmount = Minimum(InterestAndFeeBalance[i-1] + SumInterestAndFee, PayAvailableAmount)
InterestAndFeeBalance[i] = InterestAndFeeBalance[i-1]+ SumInterestAndFee - PayAmount 
PayAvailableAmount = PayAvailableAmount - PayAmount
	
- // repayment of insurance balance
PayAmount = Minimum(InsurBalance[i-1] + AdditiveInsurBalance, PayAvailableAmount)
InsurBalance[i] = InsurBalance[i-1] - PayAmount + AdditiveInsurBalance
PayAvailableAmount = PayAvailableAmount - PayAmount 
	
- // repayment of initial transaction balance
PayAmount = Minimum(TranInitBalance[i-1], PayAvailableAmount)
TranInitBalance[i] = TranInitBalance[i-1] - PayAmount 
PayAvailableAmount = PayAvailableAmount - PayAmount
	
- // repayment of next transaction balance
PayAmount = Minimum(TranBalance[i-1], PayAvailableAmount)
TranBalance[i] = TranBalance[i-1] - PayAmount 
PayAvailableAmount = PayAvailableAmount - PayAmount
	
- If InterestAndFeeBalance[i] +InsurBalance[i]  + TranInitBalance[i] + TranBalance[i] = 0 then return cash flow Date[1..i], CashFlowAmount[1..i].
	
- i - i + 1
	
- If i > 100 then return empty cash flow (cash flow cannot be generated due to number of terms > 100)

## 🔗 Connections (2)

- → Dependency: [[Collection of initial parameters for XIREL calculation]]
- ← Dependency: [[XIREL Calculation]]

## 📊 Appears In (1 diagrams)

- Custom: XIREL calculation
