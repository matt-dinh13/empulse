---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877827
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculation of Presented IRR per month extended (IRREXT_M) 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

// Calculation of PIR - type IRREXT_M
// Calculated from equal Annuity and Terms without reflection of real repayment date, with reflection of different length of the first period in installment schedule, for CEL

Input: 
- Presented IR Parameters (PIRP)

Output: 
- PresentedIRValue (percentage)

PIRCF = PIRP.Presented IR Cash Flow (local copy of cash flow from input)

Steps: 
Calculate PresentedIRValue according to rule Internal Rate of Return calculation where parameter CashFlow is defined as follows:

	
- FirstPeriodDays = Days360(PIRCF(1).Date; PIRCF(2).Date)
For calculation Days360 see Calculate number of days for 30/360 day count convention.
	
- Withdrawal = PIRCF(1).Amount
	
- FirstRepayment = PIRCF(2).Amount
	
- FictitiousProvidedLoan = Withdrawal * FirstPeriodDays/30
	
- FirstFictitiousPayment = Withdrawal - FictitiousProvidedLoan + FirstRepayment


	
- Replace PIRCF(1).Amount with FictitiousProvidedLoan
	
- Replace PIRCF(2).Amount with FirstFictitiousPayment


	
- CashFlow is array of values PIRCF(i).Order, PIRCF(i).Amount, i = [1..N], where N is number of records in PIRCF


//for example see linked document

## 🔗 Connections (3)

- → Dependency: [[Internal Rate of Return calculation]]
- → Generalization: [[{MOD}Calculation of Presented Interest Rate Type]]
- → Dependency: [[Calculate number of days for 30_360 day count convention]]

## 📊 Appears In (1 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
