---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872743
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Get Contract Service by Contract code from COS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Contract Service based on related Contract code from COS component.
Input:

	
- contractCode
	
- {ADD DOBA-332}accountNumber{/ADD}


Output:

	
- ContractService



	
- System calls GET https://cos.<environment>/rest/v1/contract-services?contractCode={contractCode}
	
- System returns the ContractService[] result. If COS component is unavailable (timeout), system returns error message of MSG_COS_NOT_AVAILABLE; e.g. Contract Service System is not available.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}16.050 Process Contract Supplement notification]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: SIR - Processing of Account Event notifications
