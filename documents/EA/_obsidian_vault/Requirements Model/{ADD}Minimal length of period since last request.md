---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19573 (CSI-2894) - New Eligibility container conditions"
domain: "Requirements Model"
element_id: 1825244
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Minimal length of period since last request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19573 (CSI-2894) - New Eligibility container conditions

## 📝 Notes

{ADD CSI-2894 /}
Check if the number of months since last service usage of service types defined in InvolvedServiceTypesToCheck for a client's contract is higher or equal to defined value in MinNumberOfMonthsSinceLastRequest. Only created or successfully executed loan service requests on contract are counted.

Code: MinPeriodSinceLastRequest

Input parameters:

	
- ContractCode


	
- ServiceId
	
- MinNumberOfMonthsSinceLastRequest: integer (user defined value)
	
- InvolvedServiceTypesToCheck : string [] (user defined list)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


If MinNumberOfMonthsSinceLastRequest= 0, ValidationMessage = OK and the check ends.
Get ServiceRequestType = Service ->Service Type.Code from Service by ServiceId
Add ServiceRequestType into InvolvedServiceTypesToCheck 
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Maximal value of Loan Service Request Status Transition.Created Date of (Loan Service Request having Request Type in (InvolvedServiceTypesToCheck) and Current Status = CREATED OR EXECUTED for the Contract with ContractCode) + number of month defined in MinNumberOfMonthsSinceLastRequest <=  current date; ValidationMessage = MSG_MinNumberOfMonthsSinceLastRequestNotMet (e.g. Minimal number of month since last request of ${InvolvedServicesToCheck} service(s) on the contract is ${MinNumberOfMonthsSinceLastRequest}); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-19573 (CSI-2894) - New Eligibility container conditions
- Custom: Eligibility Criteria Repository
