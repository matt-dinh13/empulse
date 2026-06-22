---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872721
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}SIR - Adding Sales Quote to Contract Supplement in SUP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to add a Sales Quote (an offer in the processed loan application) to the Contract Supplement in SUP

Input:

	
- contractServiceId (optional)
	
- dealCode (optional)
	
- masterTransaction  (optional)
	
- parentSalesQuoteId  (optional)
	
- paymentChannelId (optional)
	
- salesQuoteId
	
- contractSupplementId
	
- {ADD DOBA-332}accountNumber (optional){/ADD}


Output:

	
- result



	
- System calls POST https://sup.<environment>/rest/v1/contract-supplements/{contractSupplementId}/sales-quote with parameters:
- contractServiceExternalId
- dealCode
- masterTransaction
- parentSalesQuoteId
- paymentChannelId
- salesQuoteId
	
- System returns the call response into the result

## 🔗 Connections (2)

- ← Dependency: [[{ADD}16.022 Process Sales Quotes for Transaction]]
- ← Dependency: [[{MOD}16.040 Process Account Event notifications]]

## 📊 Appears In (4 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: SIR - Processing of Account Event notifications
- Use Case: Transaction origination - Use Case Model
