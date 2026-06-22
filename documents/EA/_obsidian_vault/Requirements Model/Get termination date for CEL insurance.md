---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation"
domain: "Requirements Model"
element_id: 1833577
diagrams: 5
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get termination date for CEL insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation

## 📝 Notes

The rule describe getting a termination date to the insurance termination. CEL contract types only. 

Input:

	
- Insurance Service - the processed insurance service
	
- ServiceParameters - the setting of the insurance service
	
- RequestDate  - default is the current date


Output:

	
- TerminationDate (NULL as default)
	
- InstallmentNumber (NULL as default) --  shouldn't be used for the Annuity calculation in the Calculate new installment amount on insurance termination
	
- ErrorMessage (NULL as default)


Steps:

	
- If ServiceParameters.Cut Off Days Count values are not defined, set ErrorMessage = MSG_SER_IncorrectServiceSetting (e.g. Incorrect setting of the insurance service.) and scenario ends
	
- If the ServiceParameters.limitTerminationOutOfCOP (new service param) = TRUE then
- System checks the contract for active COP/GRPER period using business rule Check contract for active COP/GRPER period. 
If the result is TRUE (contract is in COP period) then the system returns MSG_SER_TerminationActionBlocked (e.g. "Insurance termination is not possible - cooling-off period or grace period is active on the contract.") and check ends.
	
- System gets Nearest Installment (NI); Installment.Due Date of the nearest future active Installment except EXTRAORDINARY type with due date >= RequestDate.
If no Installment is found, set ErrorMessage = MSG_SER_IncorrectServiceSetting (e.g. Incorrect setting of the insurance service.) and scenario ends
	
- If RequestDate + Insurance Service.Cut Off Days Count > NI.Due Date or (NI.Installment Number = 1 and system property TerminateInsuranceBeforeFirstDueDate = 1), set TerminationDate = NI.Due Date and InstallmentNumber =NI.Installment Number else set TerminationDate = Installment.Due Date and InstallmentNumber =NI.Installment Number of the Installment before NI
	
- If found InstallmentNumber is the last installment or If no date is found or an error happen, set ErrorMessage = MSG_SER_InsuranceTerminationDateNotFound (e.g. Insurance termination failed. Date for termination not found.)


Notice to Cut Off Days Count:
When Cut Off Days Count = 0 (or other small number with dependency on RequestDate ), Termination does not work if you ask for termination before the first installment due date. For this situation (i.e. insurance termination before the first installment), we recommended to use 11.111 Cancel insurance contract manually or set system property TerminateInsuranceBeforeFirstDueDate to use DueDate of the first installment.

Example of  Cut Off days setting:

	
- If customer has due date in January 15th, February 15th, March 15th, etc. and Cut of days = 15
And insurance termination is asked in January 25th, then reference date will be February 9th and customer don't have to pay insurance amount for February 15th and following, because February 9th < February 15th 
But if insurance termination is asked in February 1st , then reference date will be February 16th and customer has to pay insurance amount for February, since February 16th > February 15th


	
- If customer has due date in January 15th, February 15th, March 15th, etc. and Cut of days = 31
And insurance termination is asked in January 25th, then reference date will be February 25th and customer has to pay insurance amount for February and following
If insurance termination is asked in January 16th, then reference date will be February 16th and customer has to pay insurance amount for February and following as well

## 🔗 Connections (3)

- ← Dependency: [[08.454 Terminate contract insurance service (UseCase 1878981)]]
- ← Dependency: [[11.121 Terminate insurance contract manually (UseCase 1878971)]]
- ← Dependency: [[08.453 Get Contract insurance Terminate preview service (UseCase 1878969)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-4059 (CLM-1585) Insurance Contract Cancellation/Termination – System Improvement
- Custom: CSI-1904 Update of the Terminate insurance method for new Service Catalogue
- Use Case: Contract insurance termination
- Use Case: Termination of Insurance contract options
