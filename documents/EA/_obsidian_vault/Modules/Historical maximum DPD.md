---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877488
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Historical maximum DPD

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Actual DPD=difference between actual date and First overdue installment due date value in last valid record in Debt Catalogue (DEBT_CATALOGUE.VALID_TO = null)

{DEL IS-977}
If  actual DPD> value Maximal DPD in history in Debt Statistics of appropriate record of the contract then:

	
- set Debt Statistics.Maximal DPD in history= actual DPD
	
- if no record in Debt Statistics exists for the contract, new one is created (each contract can have only one record).

{/DEL IS-977}

{ADD IS-977}
System finds all active installments with type STANDATD, EARLY REAPID or TERMINATED and with due date in the past and their installment parts:

	
- for each installment part DPD is found:
- if fully paid date is null, then DPD =  current date - installment.dueDate
- else DPD =  installmentPart.fullyPaidDate - installment.dueDate 
	
- max DPD if found -> highest value of istallment part DPD
	
- set debtStatistics.MaxHistDpd = max DPD

{/ADD IS-977}

## 📊 Appears In (1 diagrams)

- Custom: Debt statisctics calculation formulas
