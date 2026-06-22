---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository"
domain: "Analysis Model"
element_id: 1825226
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {DEL}Client eligibility for service type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Eligibility Criteria Repository

## 📝 Notes

-- disabled in CLM-6415 as obtaining data from DWH was decommissioned on OSB retirement
Check if a client is eligible for evaluated service type. Data is obtained from an external evaluation tool (DWH). If no record is found for the client, it is evaluated as eligible.

Code: CLIENT_ELIGIBILITY_FOR_SERVICE_TYPE

Input parameters:

	
- CUID
	
- ServiceId


Output:

	
- ValidationMessage
	
- CanBeOverruled = TRUE


Get ServiceType = Service ->Service Type.Code and ServiceName = Service.Name from Service by ServiceId
Check definition (validation rule; ValidationMessage when validation fails; ValidationMessage when validation passes)

	
- Client Service Eligibility.Is Eligible = TRUE (for Client Service Eligibility having CUID = CUID and Service Type = ServiceType and Active Flag = 1) or no record is found; ValidationMessage  = MSG_ClientIsInvalideForServiceType (e.g. Client is not valid for ${ServiceName})

## 🔗 Connections (1)

- → Generalization: [[Service eligibility rules]]

## 📊 Appears In (1 diagrams)

- Custom: Eligibility Criteria Repository
