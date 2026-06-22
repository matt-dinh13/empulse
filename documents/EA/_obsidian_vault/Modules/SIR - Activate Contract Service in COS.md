---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872725
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 SIR - Activate Contract Service in COS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to activate ContractService in COS module.

Input:

	
- contractServiceExternalId
	
- activationDate
	
- reasonCode
	
- reasonNotice (optional)

  
Output:

	
- ContractService



	
- System calls GET https://cos.<environment>/rest/v1/contract-services/{contractServiceExternalId}/activate with parameters:
- activationDate
- reasonCode
- reasonNotice
	
- System returns the ContractService result. 
If an error is returned, system returns error message MSG_SERVICE_ACTIVATION_FAILED; e.g. Contract Service activation failed.
If COS component is unavailable (timeout), system returns error message of MSG_COS_NOT_AVAILABLE; e.g. Contract Service System is not available.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}16.050 Process Contract Supplement notification]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (1 diagrams)

- Use Case: Account origination - Use Case Model
