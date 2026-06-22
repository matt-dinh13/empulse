---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878905
diagrams: 1
connections: 5
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Generate installment schedule - Extended

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

The described IS algorithm is standard 30/360 with constant annuity, but in addition, length of the first interest period is taken into account at the interest calculation. It means different count of days between the loan providing (mostly contract sign date) and the first installment due date. This length does not need be supposed 30 days, but it can be shorter or  longer.

Inputs

	
- Contract


	
- Financial Parameters (FP) - structure of financial parameters of contract (including fees)


	
- Recalculation reason


	
- Installment Version (optional)
	
- Installment Number (optional)
	
- {ADD IS-1844} Service Parameters (optional) {/ADD}

Outputs

	
- Installment Schedule - structure of Installments (INSTALLMENT) and corresponding Installment Parts (INSTALLMENT_PART) (not persistent)
	
- IS Interest Rate


Definitions and calculated values

	
- FP.TarifItem - array of fees charged to the contract from FP.Tariff Item having Tariff Item Type.Charging Periodicity = 'In Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes


	
- {ADD CBL-12130  IS-1206} FP.TarifItemInFirstInstallment - array of fees charged to the contract from FP.Tariff Item having Tariff Item Type.Charging Periodicity = 'In First Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes

        (Claculated by rule In first installment fees amount definition , charged to installment with due date specified in Get installment for Origination Fee{/ADD}

	
- FP.FirstDueDate (FDD)
	
- Date of the Loan Providing (DLP) = FP.Loan Providing Date


	
- DaysBeforeDueDate - global parameter for client's due date of an installment


	
- For rounding of calculated amounts is roundingScale and roundingMethod parameters obtained from parametersCustomProperties (Java)


	
- I - Installment entity
	
- IP - Installment Part entity
	
- Receivable to PD (Receivable to the previous date) - before start of algorithm is pre filled with FP.Provided Credit Amount
	
- EMI (Equated Monthly Installment) = FP.Annuity
	
- start_date - beginning of the interest period; for the first period it is DLP; for the every next period it is end_date of the previous period.
	
- end_date - end of interest period; for the first period it is FDD; for the second and next period it is FDD = FDD + 1 month
	
- Interest per IP (Interest per an interest period)
	
- Interest (interest going to the Installment)
	
- IRR - Internal rate of return (%)
	
- i - number of installment from 1 to FP.Term



A. If Recalculation reason = 'PR' then it is continued with Partially regenerate installment schedule algorithm with parameters from the input
B. If Recalculation reason != 'PR' then it is continued with next steps:
1.  {ADD CBL-11196} If date(start_date) = current_date and IS algorithm in ISalgorithmSupportingFirstPeriodDefaultLength then system calls Compute first period default length (FDD) to update the first period start date.{/ADD CBL-11196} 
2.  System creates set of Installments in count of FP.Terms value with attributes:

	
- I.Due Date = FDD for the first installment; If FP.Shifted Last Due Date is not NULL, then for each next term except the last, incremented by one month and the last installment =FP.Shifted Last Due Date else for each next term incremented by one month


	
- I.Contract = reference to contract from input
	
- I.Customer Due Date = I.Due Date – DaysBeforeDueDate {ADD BRPH-50 IS-2337} If I.Due Date – DaysBeforeDueDate < Contract.Sign Date, then I.Customer Due Date = Contract.Sign Date {/ADD}
	
- I.Installment Number = 1 for the first installment; for each next term incremented by one
	
- I.Version = 1
	
- I.Installment Type = 'STANDARD'
	
- I.Active = 'TRUE'
	
- I.Recalculation Reason  = Recalculation reason from input


2.  Real and fictitious cash flow is determined for IRR calculation as follow:
    Fictitious cash flow is set of values  where are involved:
	- Provided Loan = FP.Provided Credit Amount * Days360(start_date; end_date)/30
	- First fictitious payment = FP.Provided Credit Amount - Provided Loan - EMI
	- set of the Remaining fictitious payments from the second up to FP.Term as negative values of EMI  
	Fictitious cash flow is set as array of values as follow: (0 = Provided Loan, 1 =  First fictitious payment, 2 = - EMI , 3 = - EMI , …, N = - EMI; where N = FP.Term)

3.  If FP.Interest Rate = 0 then set IRR = 0 else IRR is calculated by Internal Rate of Return calculation algorithm on basic of values defined in Fictitious cash flow

4.  Initial setting of items for interest and principal calculation is performed as follow:

	
- i = 1 (it means the first installment)
	
- Receivable to PD[i] = FP.Provided Credit Amount
	
- start_date = DLP
	
- end_date = FDD


{ADD CBL-12130  IS-1206} 
5. If FP.generateOriginationFeeItems = TRUE, IP.Amount for I.PartType = 'F' is obtained as Fee = FP.TarifItemInFirstInstallment for first installment
{/ADD}

6.  For each created Installment except the last one, system calculates its fee, principal and interest. Subsequently, system creates corresponding Installment Part with:

	
- IP.Amount for I.Part Type = 'F' (Fee) is obtained as:
Fee = FP.Tariff Item.Item Amount
For every fee from FP.Tariff Item from the input one Installment Part record is created.


	
- IP.Amount = Interest[i]. For I.Part Type = 'I' (Interest) is calculated as:
{ADD BRPH-50 IS-2337} If start_date = end_date (special case for first installment where FDD = DLP), then set Interest per IP[i] = 0. Else {/ADD}
Interest per IP[i] = Receivable to PD[i] * IIR * Days360(start_date; end_date)/30; [roundingScale], [roundingMethod])
Interest[i] = MIN (EMI; sum of (Interest per IP[1 to i]) - sum of (Interest[1 to i -1])
{ADD BRPH-50 IS-2337} If Interest[i] = 0, then installment part type 'I' is not created for the installment. {/ADD}
	
- IP.Amount for I.Part Type = 'S' (Principal) is calculated as:
Principal[i] = (EMI - Interest[i]; [roundingScale], [roundingMethod])


	
- IP.Amount Paid = 0
	
- IP.Part Type = 'F' or 'S' or 'I' by created type.


	
- IP.Tariff Item = for every charged IP.Part Type = 'F' (Fee) is stored reference to particular Tariff.Tariff Item from FP.Tariff Item


	
- System updates items for calculation next Installment Part:
i = i + 1 (next installment number) If i = FP.Term (the last installment), it is continued with step #6
Receivable to PD[i] = sum of (Receivable to PD[i-1]; Interest to PD[i-1]; - EMI)
start_date = due date of Installment Number i - 1
end_date = due date of Installment Number i


7.  For the last Installment, system calculates fee, principal and interest. Subsequently, system creates corresponding Installment Parts with:

	
- IP.Amount for I.Part Type = 'F' (Fee) is obtained as:
Fee = FP.Tariff Item.Item Amount
For every fee from FP.Tariff Item from the input one Installment Part record is created.


	
- IP.Amount for I.Part Type = 'S' (Principal) is calculated as:
Principal[i] = FP.Provided Credit Amount - sum of (Principal[1 to i - 1])


	
- IP.Amount for I.Part Type = 'I' (Interest) is only calculated if IRR > 0 as:

        Interest[i] = EMI - Principal[i]

	
- IP.Amount Paid = 0
	
- IP.Part Type = 'F' or 'S' or 'I' by created type.


	
- IP.Tariff Item = for every charged IP.Part Type = 'F' (Fee) is stored reference to particular Tariff.Tariff Item from FP.Tariff Item


8. {ADD IS-1844} If Service Parameters.Apply To Up = true and Service Parameters.Overlap Period > 0, system creates x standard installments with part type principal and amount = 0 (x = Service Parameters.Overlap Period). Due date of the first zero installment = FP.first due date - x months, due dates of next zero installments are after one month.  Else continue with step 10.
System increase number for all non-zero installments by Service Parameters.Overlap Period.{/ADD}

9.  System returns list of installments and their installment parts and IRR as IS Interest Rate

For an example of this installment schedule algorithm see Example of IS generating - Extended1 algorithm

## 🔗 Connections (4)

- → Dependency: [[ISGEN - Partially regenerate installment schedule algorithm]]
- → Generalization: [[ISGEN - Generate installment schedule algorithm]]
- → Dependency: [[ISGEN - Calculate number of days for 30_360 day count convention]]
- → Dependency: [[ISGEN - Internal rate of return calculation]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
