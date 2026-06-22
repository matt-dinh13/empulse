---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833420
diagrams: 3
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Validate Service replacement for REL contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

The rule send service replacement request to AP module and return the results.

Inputs:
- ContractCode
- ReplacedServiceCode + Version
- NewServiceCode + Version
- ServiceStatus 

Outputs:
result -TRUE/FALSE
HTTP code + error message (if return false)

Steps:

	
- System prepare {ADD}ReplaceServiceRequest by data from input and system calls {ADD}Replace Service  REST API provided by Account Pricing module (i.e. GET .../ap/service/flip)
	
- System evaluates {ADD}ReplaceServiceResponse :
- if the response code=200 with response.status = COMPLETED then result = TRUE
- if the response code=200 with any other status (e.g. FAILED) then result = FALSE, HTTP code=422 (not allowed), message =  response.errorMessage
- if any other response is received then result = FALSE, HTTP code= response code, message = error message from response
- if no response is received or any error occurs then result = FALSE, HTTP code= 500, message = "Validation of service replacement in AP module failed."

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-9632 (CLM-2981) FLIP eligibility validation in AP
- Use Case: Service - Contract Service management via API
