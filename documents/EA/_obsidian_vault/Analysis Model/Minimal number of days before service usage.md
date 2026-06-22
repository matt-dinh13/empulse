---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825245
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Minimal number of days before service usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

Client cannot create a Service request (e.g. Payhol) less than MinNumberOfDaysBeforeServiceUsage days before the nearest installment due date and have to wait to next month to be able to do it

Code: MIN_NUMBER_OF_DAYS_BEFORE_SERVICE_USAGE

Input parameters:

	
- ContractCode


	
- ServiceId
	
- MinNumberOfDaysBeforeServiceUsage : integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


Steps:
Get the nearest Installment.Due Date of the standard active Installment from the Contract Installment Schedule
If no Installment is found then ValidationMessage = MSG_InstallmentScheduleNotExist 
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Check if Installment.Due Date >= current date + MinNumberOfDaysBeforeServiceUsage; MSG_MinNumberOfDaysBeforeServiceUsageBroken (i.e. "Minimal number of days before ${ServiceName} usage is broken."); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
