---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities"
domain: "Modules"
element_id: 1872749
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {DEL}SIR - Get Transaction Supplement by code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities

## 📝 Notes

{DEL CSI-3743 /}
This rule describes how to get Transaction Supplement based on its ID from BSL Transaction Supplement

Input:

	
- transactionSupplementId



	
- System calls GET method of .../transaction-supplement/{transactionSupplementId}
	
- System returns the TransactionSupplement in the response. 
If BSL component is unavailable (timeout), system returns error message of MSG_BSL_NOT_AVAILABLE; e.g. BSL system is not available.

## 📊 Appears In (1 diagrams)

- Use Case: SIR - Update process-loan API method - use cases
