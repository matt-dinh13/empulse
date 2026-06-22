---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850567
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SIR - Adding Sales Quote to Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to add a Sales Quote (an offer in the processed loan application) to the Transaction Supplement

Input:

	
- contractServiceId (optional)
	
- dealCode (optional)
	
- masterTransaction  (optional)
	
- parentSalesQuoteId  (optional)
	
- paymentChannelId (optional)
	
- salesQuoteId
	
- transactionSupplementId


Output:

	
- result



	
- System calls POST ../bsl/api/vx/transaction-supplement/sales-quote with parameters:
- contractServiceId
- dealCode
- masterTransaction
- parentSalesQuoteId
- paymentChannelId
- salesQuoteId
- transactionSupplementId
	
- System returns the call response into the result

## 🔗 Connections (1)

- ← Dependency: [[16.020 Process request for a loan]]

## 📊 Appears In (1 diagrams)

- Use Case: Service Interpreter - Use Case Model
