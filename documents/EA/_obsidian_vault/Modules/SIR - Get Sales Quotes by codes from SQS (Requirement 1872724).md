---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872724
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Sales Quotes by codes from SQS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Sales Quote data from the SQS based on provided Sales Quote codes

Input:

	
- codes[] -- array of sales quote codes


Output:

	
- SalesQuote[] -- array of sales quotes



	
- System calls GET .../api/salesQuotes/search/findByCodeIn?codes=list of codes delimited by coma
	
- System returns the SalesQuote[] result. If SQS component is unavailable (timeout), system returns error message of MSG_SQS_NOT_AVAILABLE; e.g. Sales Quote System is not available.

## 🔗 Connections (3)

- ← Dependency: [[16.030 Process Transaction Supplement notification (UseCase 1872763)]]
- ← Dependency: [[{MOD}16.010 Request for a loan service]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (4 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Processing of Account Event notifications
- Use Case: Transaction origination - Use Case Model
