---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872765
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Cancel Contract Service in COS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

{ADD DOBA-351 /}
This rule describes how to cancel ContractService in COS module.

Input:

	
- contractServiceExternalId
	
- reasonCode
	
- reasonNotice (optional)

  
Output:

	
- ContractService



	
- System calls GET https://cos.<environment>/rest/v1/contract-services/{contractServiceExternalId}/cancel with parameters:
- reasonCode
- reasonNotice
	
- System returns the ContractService result. 
If an error is returned, system returns error message MSG_SERVICE_CANCELATION_FAILED; e.g. Contract Service cancellation failed.
If COS component is unavailable (timeout), system returns error message of MSG_COS_NOT_AVAILABLE; e.g. Contract Service System is not available.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.050 Process Contract Supplement notification]]

## 📊 Appears In (1 diagrams)

- Use Case: Account origination - Use Case Model
