---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825233
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Maximal number of days from the nearest nonzero installment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

{ADD CSI-2765 /}
Client cannot create a Service request more than a month before the nearest nonzero installment due date and have to wait to next month to be able to do it. This rule mainly serves to eliminate PAYHOL zero installments so that no service request can be applied into the Payhol period.

Code: MAX_NUMBER_OF_DAYS_BEFORE_SERVICE_USAGE

Input parameters:

	
- ContractCode


	
- ServiceId


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


Steps: (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Get the nearest Installment.Due Date of the standard active Installment from the Contract Installment Schedule where Sum(Amount) > 0 and Sum(Amount Paid)=0 --prescribed amount of installment must be greather that 0 and also Sum of paired payments must be 0
	
- If no Installment is found then ValidationMessage = MSG_InstallmentScheduleNotExist
	
- Check if (Installment.Number>1) AND (Installment.Due Date - a Month) > current date; MSG_MaxNumberOfDaysBeforeServiceUsageBroken (i.e. "Maximal number of days before ${ServiceName} usage is broken."); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
