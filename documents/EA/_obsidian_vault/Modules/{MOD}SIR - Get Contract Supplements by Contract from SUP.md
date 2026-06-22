---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872736
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}SIR - Get Contract Supplements by Contract from SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Contract Supplement based on related Contract code and Supplement Type from SUP component.

Input:

	
- contractCode
	
- supplementType
	
- {ADD DOBA-332}accountNumber (optional){/ADD}



	
- System calls GET method of https://sup.<environment>/rest/v1/contract-supplements?contractCode={contractCode}&supplementType={supplementType}{ADD DOBA-332}&accountNumber={accountNumber} (optional){/ADD}
	
- System returns the ContractSupplement in the response. 
If SUP component is unavailable (timeout), system returns error message of MSG_SUP_NOT_AVAILABLE; e.g. SUP system is not available.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: SIR - Processing of Account Event notifications
