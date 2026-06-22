---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1870145
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Set Sales Quote values for Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CSI-3702 /}
Adding of a Sales Quote to the Sales Quote Applied related to the Contract Supplement of TRANSACTION type and possible creation of Account Transaction in new status.

Input:

	
- ContractSupplement
	
- SQS.data


	
- paymentChannelCode -- from input (optional)
	
- contractServices[] -- from input (optional)
-- contractServiceExternalId 
-- dealCode
	
- parentSalesQuote -- from input (optional)



Steps:
1. Store values in Sales Quote Applied entity

	
- Sales Quote Id = SQS.code


2. Store values from contractServices in Sales Quote Applied -> Sales Quote Item entity (if any)

	
- Service External Id = contractServiceExternalId


	
- Deal Code = dealCode


3. If parentSalesQuote is not NULL, set relationship between Sales Quotes Applied in the SQ Relationship as follow:

	
- Parent Sales Quote = parentSalesQuote
	
- Child Sales Quote = SQS.code


4. If  SQS.amountArrangements.transactionAmount > 0 exists then system -- the sales quote item to be charged: Goods purchase, Insurance premium, fee

	
- creates a transaction in Sales Quote Applied -> Sales Quote Item entity -> Account Transaction entity by {ADD}Create CASH/POS transaction rule in the AccountTransaction with parameters: 
- ContractSupplement
- transactionType = SQS.data.transactionType
- initialStatus = 'NEW'
- transactionAmount = SQS.amountArrangements.transactionAmount
- paymentChannel = paymentChannelCode
- Sales Quote Applied reference (SQS.code)
- parentSalesQuote
- commodityId = if parentSalesQuote is NULL ("master" Sales Quote), then get SalesQuote.specifications.value for key = 'COMMODITY_CODE' (if exists only), else NULL
- purpose

END
