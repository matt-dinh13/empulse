---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules"
domain: "Modules"
element_id: 1824449
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Adjustment of parameters for Presented IR

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules

## 📝 Notes

// Adjusting of parameters for PIR calculation
// Addition or subtraction of fees included into PIR calculation into cash flow
// Such TariffItemTypes, which are supposed to
// - decrease provided loan amount
// - increase repayment amount
// must be marked by flag PIR_INCLUDED

Input: 
- Presented IR Parameters (Par) - set of parameters for calculation, used and mandatory for CEL products

Fee = Par.Presented IR Fee (Type, Amount, DueDate) - fees potentially included into PIR calculation
CFlow = Par.Presented IR Cash Flow (Date, Amount) - cash flow, on input contains only repayments of annuity (principal + interest)

// Summary OriginationFee, PrincipalFee, InstallmentFee (Irregular fees where DueDate is NOT null are ignored)
Set OriginationFee = 0
Set PrincipalFee = 0
Set InstallmentFee = 0
{ADD PCG-4710}Set OtherFee = 0 {/ADD}

For each Fee where Fee.Type.TariffItemTypeFlag(PIR_INCLUDED) = True and Fee.DueDate is null :

TIT = Fee.TariffItemType
// origination fee
If TIT.ChargingPeriodicity = ONE_TIME and TIT.TariffItemTypeFlag(TO_PRINCIPAL) = False then OriginationFee = OriginationFee + Fee.Amount
// fee included into principal
If TIT.ChargingPeriodicity = ONE_TIME and TIT.TariffItemTypeFlag(TO_PRINCIPAL) = True then PrincipalFee = PrincipalFee + Fee.Amount
// monthly fee
If TIT.ChargingPeriodicity = IN_INSTALLMENT and TIT.TariffItemTypeFlag(TO_PRINCIPAL) = False then InstallmentFee = InstallmentFee + Fee.Amount
{ADD PCG-4710}
// other fee
If TIT.ChargingPeriodicity = NOT_CHARGED then OtherFee = OtherFee + Fee.Amount
{/ADD}
Continue with the next Fee.

// Reflect calculated OriginationFee, PrincipalFee, InstallmentFee
Set Par.WithdrawalAmount = Par.ProvidedLoanAmount - OriginationFee - PrincipalFee {ADD PCG-4710}- OtherFee{/ADD}
Set Par.TotalMonthlyRepaymentAmount = Par.Annuity + InstallmentFee
For each record in CFlow set CFlow.Amount = CFlow.Amount - InstallmentFee

// Include Irregular fee with defined DueDate into Cash flow 
For each Fee where Fee.Type.TariffItemTypeFlag(PIR_INCLUDED) = True and Fee.DueDate is NOT null :
-- If exists record in CFlow where CFlow.Date = Fee.DueDate then 
---- set CFlow.Amount = CFlow.Amount - Fee.Amount
-- else create record in CFlow with
---- CFlow.Date = Fee.DueDate
---- CFlow.Amount = - Fee.Amount
Continue with the next Fee.

// Include Withdrawal into Cash flow
If exists record in CFlow where CFlow.Date = Par.LoanProvidingDate then 
-- set CFlow.Amount = CFlow.Amount + Par.WithdrawalAmount
else create record in CFlow with
-- CFlow.Date = Par.LoanProvidingDate
-- CFlow.Amount = Par.WithdrawalAmount
// End of Withdrawal

Order CFlow by Date (ascending) and fill in corresponding CFlow.Order [1..N], where N is number of records in CFlow

## 🔗 Connections (1)

- ← Dependency: [[Calculation of Presented IR types]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Presented interest rates
