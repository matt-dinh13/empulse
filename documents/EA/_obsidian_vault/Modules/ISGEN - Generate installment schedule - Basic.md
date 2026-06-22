---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878908
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Generate installment schedule - Basic

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

The described algorithm is standard 30/360 with constant annuity. It means the length of interest period is always 30 days for every annuity.

Inputs

	
- Contract


	
- Financial Parameters (FP) - structure of financial parameters of contract (including fees)
	
- Recalculation reason


	
- Installment Version (optional)
	
- Installment Number (optional)
	
- {ADD IS-1844} Service Parameters (optional) {/ADD}

Outputs

	
- Installment Schedule - structure of Installments (INSTALLMENT) and corresponding Installment Parts (INSTALLMENT_PART)
	
- IS Interest Rate

Definitions

	
- FP_TarifItem - array of fees charged to the contract from FP.OFP_TARIFF_ITEM having TARIFF_ITEM_TYPE.CHARGING_PERIODICITY = 'In Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes
	
- {ADD CBL-12130  IS-1206} FP.TarifItemInFirstInstallment - array of fees charged to the contract from FP.Tariff Item having Tariff Item Type.Charging Periodicity = 'In First Installment' and Usage in (Standard, Service) including their Item Amount and Tariff Item attributes

         (Claculated by rule In first installment fees amount definition , charged to installment with due date specified in Get installment for Origination Fee{/ADD}

	
- DaysBeforeDueDate - global parameter for client's due date of an installment


	
- For rounding of calculated amounts is roundingSchedule parameter obtained


A. If Recalculation reason in {MOD CBL-10479} list of recalculation reasons ISalg_Basic_GenPartially_RecalcReason {/MOD} then it is continued with Partially regenerate installment schedule algorithm with parameters from the input
B. If Recalculation reason not in  {MOD CBL-10479} list of recalculation reasons ISalg_Basic_GenPartially_RecalcReason {/MOD} then it is continued with next steps:

	
- System sets EMI: EMI = FP.Annuity
	
- System sets OutstandingPrincipal by value from FP.PROVIDED_CREDIT_AMOUNT (sum of fees with To_Principal = 'TRUE' are included here)
	
- If FP.Interest Rate = 0 then set EIR = 0 else system calculates EIR as EIR calculation(FP.Terms, -OutstandingPrincipal, EMI).
	
- System creates set of installments in count of FP.Terms value:
- INSTALLMENT.DUE_DATE = FP.FirstDueDate for the first installment; If FP.Shifted Last Due Date is not NULL, then for each next term except the last, incremented by one month and the last installment =FP.Shifted Last Due Date else for each next term incremented by one month
- INSTALLMENT.CONTRACT_ID = contract from input
- INSTALLMENT.CUSTOMER_DUE_DATE = INSTALLMENT.DUE_DATE – global parameter DaysBeforeDueDate. {ADD BRPH-50 IS-2337} If INSTALLMENT.DUE_DATE – DaysBeforeDueDate < Contract.Sign Date, then I.Customer Due Date = Contract.Sign Date {/ADD}
- INSTALLMENT.INSTALLMENT_NUMBER = 1 for the first installment; for each next term incremented by one 
- INSTALLMENT.VERSION = 1
- INSTALLMENT.INSTALLMENT_TYPE = 'STANDARD'
- INSTALLMENT.ACTIVE = 'true'
- INSTALLMENT.RECALCULATION_REASON  = Recalculation reason
	
- {ADD CBL-12130  IS-1206}  If FP.generateOriginationFeeItems = TRUE, IP.Amount for I.PartType = 'F' is obtained as Fee = FP.TarifItemInFirstInstallment for first installment {/ADD}
	
- For each created installment except the last one, system calculates its fee, principal and interest. Subsequently, system creates corresponding installment parts (INSTALLMENT.PART) with:
- INSTALLMENT_PART.AMOUNT is set based on installment's part type (INSTALLMENT_PART.PART_TYPE):
    - Fee = Item Amount. For every fee provided by FP.OFP_TARIFF_ITEM from the input one Installment Part record is created.
    - Principal = RoundHalfUp(EMI / ( (1.0 + EIR) ^ (FP.Terms - i) ) where 'i' is number of current installment (i = [0 .. FP.Terms-1]). The amount is rounded based on roundingSchedule parameter. 
    - Interest = EMI – Principal (from current step)
- INSTALLMENT_PART.AMOUNT_PAID = 0
- INSTALLMENT_PART.PART_TYPE = 'Fee' or 'Principal' or 'Interest' correspondingly.
- INSTALLMENT_PART.TARIFF_ITEM = for every charged Fee system persistently stores relation between those installment parts and fee tariff items 
System decrements OutstandingPrincipal as OutstandingPrincipal = OutstandingPrincipal – Principal[i] for each installment (except the last one).
	
- For the last installment, system calculates fee, principal and interest. Subsequently, system creates corresponding installment parts (INSTALLMENT.PART) with:
- INSTALLMENT_PART.AMOUNT is set based on installment's part type:
    - Fee = Item Amount. For every Fee provided by FP.OFP_TARIFF_ITEM from the input one Installment Part record is created.
    - Principal = remaining OutstandingPrincipal (from step 5)  
    -  If EIR > 0 Interest = EMI - Principal (from current step); installment part for interest is created only when it is greater than zero
- if INSTALLMENT_PART.AMOUNT = 0 then system sets INSTALLMENT_PART.FULLY_PAID_DATE = current date
- INSTALLMENT_PART.AMOUNT_PAID = 0
- INSTALLMENT_PART.PART_TYPE = 'Fee' or 'Principal' or 'Interest' correspondingly.
- INSTALLMENT_PART.TARIFF_ITEM = for every charged Fee system persistently stores relation between these installment parts and fee tariff items
	
- {ADD IS-1844} If Service Parameters.Apply To Up = true and Service Parameters.Overlap Period > 0, system creates x standard installments with part type principal and amount = 0 (x = Service Parameters.Overlap Period). Due date of the first zero installment = FP.first due date - x months, due dates of next zero installments are after one month.  Else continue with step 10.
	
- System increase number for all non-zero installments by Service Parameters.Overlap Period.{/ADD}
	
- System returns list of installments and their installment parts and EIR as IS Interest Rate


For an example of this installment schedule algorithm see Example of IS generating - Basic algorithm

## 🔗 Connections (3)

- → Dependency: [[ISGEN - EIR calculation]]
- → Dependency: [[ISGEN - Partially regenerate installment schedule algorithm]]
- → Generalization: [[ISGEN - Generate installment schedule algorithm]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
