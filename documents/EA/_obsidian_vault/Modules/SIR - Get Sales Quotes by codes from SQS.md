---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850569
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 SIR - Get Sales Quotes by codes from SQS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get Sales Quote data from the SQS based on provided Sales Quote codes

Input:

	
- codes[] -- array of sales quote codes


Output:

	
- SalesQuote[] -- array of sales quotes



	
- System calls GET .../api/salesQuotes/search/findByCodeIn?codes=list of codes delimited by coma
	
- System returns the SalesQuote[] result. If SQS component is unavailable (timeout), system returns error message of MSG_SQS_NOT_AVAILABLE; e.g. Sales Quote System is not available.

## 🔗 Connections (2)

- ← Dependency: [[16.030 Process Transaction Supplement notification]]
- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
