---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11645 (CSI-383) Change Eligibility Container for PayHol Service"
domain: "Requirements Model"
element_id: 1825231
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Maximal number of service instance usage per defined period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11645 (CSI-383) Change Eligibility Container for PayHol Service

## 📝 Notes

Check if maximal number of service instance usage being checked for a client's contract per period (in months) defined in MonitoredPeriodToUseService is lower than defined value in MaxNumberOfServiceUsagePeriod. Only successfully executed services of the same code on contract are counted.

Code: MAX_NUMBER_OF_SERVICE_CODE_USAGE_PER_PERIOD

Input parameters:

	
- ContractCode


	
- ServiceId
	
- MaxNumberOfServiceUsagePeriod : integer (user defined value)


	
- MonitoredPeriodToUseService : integer (user defined value)


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


If MaxNumberOfServiceUsage = 0 or MonitoredPeriodToUseService = 0, ValidationMessage = OK and the check ends.
Get ServiceCode = Service ->Service.Code and ServiceName = Service.Name from Service by ServiceId
Add ServiceRequestType into InvolvedServicesToCheck
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Count of (Loan Service Request related to Contract -> Contract Service having Contract Service.Service Code = ServiceCode and Current Status = EXECUTED for the Contract with ContractCode and (Loan Service Request Status Transition.Created Date for Status = EXECUTED) is between current date and current date - number of month in MonitoredPeriodToUseService) < MaxNumberOfServiceUsage ; ValidationMessage = MSG_MaxNumberServiceUsagePerPeriodExceeded (e.g. Maximal number of ${ServiceName} service usage on the contract per defined period is ${MaxNumberOfServiceUsage}); OK

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-11645 (CSI-383) Change Eligibility Container for PayHol Service
- Custom: Eligibility Criteria Repository
