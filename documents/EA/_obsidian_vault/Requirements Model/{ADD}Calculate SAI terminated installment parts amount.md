---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan/CLM-5981 Termination of the SAI with installments"
domain: "Requirements Model"
element_id: 1878745
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Calculate SAI terminated installment parts amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan/CLM-5981 Termination of the SAI with installments

## 📝 Notes

{ADD IS-2177}
Inputs:

	
- Contract
	
- Insurance termination due date


Calculation of remaining debt from standard installments 

	
- System gets financial parameters and installments for the contract
	
- Remaining principal is calculated:
- Actual principal = principal installment part with due date = Insurance termination due date, if Insurance termination due date < next installment due date, then Actual principal = 0
- Monthly premium = Insurance premium amount / number of loan installments
- Remaining Premium = Credit amount - (Monthly premium * number of installments wit due date <= Insurance termination due date)
- {ADD IS-2248}Original{/ADD} Remaining Principal = Credit amount - sum of principal for installments wit due date <= Insurance termination due date
- Remaining Principal = {ADD IS-2248}Original{/ADD} Remaining Principal - Remaining Premium + Actual principal
	
- If Insurance termination due date = nearest installment due date (nearest installment is first installment with due date due date >= current date)

        - System calculates Remaining interest amount as Nearest installment.Interest part.Amount
        - System calculates Remaining fees amount separately by Tariff Item Type as Nearest installment.Fee part.Amount

	
- If Insurance termination due date < nearest installment due date, then Remaining interest amount = 0 and Remaining fees amount = 0
	
- {ADD TFT-15240} Terminated principal = Credit amount - Remaining principal
	
- Past principal = sum  principal installment parts for contract from input with due date < current date (contract -> installment -> installment part). Principal installment part = inspallmentPart.amount where installment.activeFlag = 1 and installmentPartType.type = 'S' and installment.dueDate < current date {/ADD}
	
- Return {DEL TFT-15240}Original Remaining Principal,{/DEL} {ADD TFT-15240}Terminated principal, Past principal,{/ADD} Remaining principal, Remaining interest amount and Remaining fees amount

## 🔗 Connections (3)

- ← Dependency: [[{MOD}08.121 Terminate contract insurance common]]
- ← Usage: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]
- ← Dependency: [[{ADD}03.032 Perform insurance termination for SAI contract]]

## 📊 Appears In (3 diagrams)

- Use Case: CLM-5981 Termination of the SAI with installments
- Use Case: Contract insurance termination
- Use Case: Terminate insurance for SAI contract
