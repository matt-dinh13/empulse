---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870137
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Sales Quote by salesQuoteCode from SQS (SUP)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule describes how to get offer data from the SQS based on provided salesQuoteCode
 

	
- System calls GET https://sqs.<environment>/api/salesQuotes/{salesQuoteCode }
	
- System returns the SalesQuote result. If SQS component is unavailable (timeout), system returns error message of MSG_SQS_NOT_AVAILABLE; e.g. Sales Quote System is not available.

## 🔗 Connections (1)

- ← Dependency: [[13.020 Add Sales Quote to Contract Supplement]]

## 📊 Appears In (1 diagrams)

- Use Case: Add Sales Quote to Contract Supplement - Use Case Model
