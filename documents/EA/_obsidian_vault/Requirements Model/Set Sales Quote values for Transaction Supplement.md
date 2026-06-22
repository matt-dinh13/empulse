---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1740 - Update method for TransactionSupplement creation"
domain: "Requirements Model"
element_id: 1878822
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Set Sales Quote values for Transaction Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1740 - Update method for TransactionSupplement creation

## 📝 Notes

Adding of a Sales Quote to the Sales Quote Applied related to the Transaction Supplement and possible creation of Account Transaction in new status

Input:

	
- ContractSupplement
	
- SQS.data


	
- paymentChannelCode = from input (optional)
	
- transactionType
	
- serviceExternalId = from input (optional)
	
- dealCode = from input (optional)
	
- parentSalesQuote = from input (optional)
	
- masterTransaction (optional)


Steps:
1. Store values in Sales Quote Applied entity

	
- Sales Quote Id = SQS.code
	
- Service External Id = serviceExternalId
	
- Deal Code = dealCode


2.If parentSalesQuote is not NULL, set relationship between sales quotes in the SQ Relationship as follow:

	
- Parent Sales Quote = parentSalesQuote
	
- Child Sales Quote = SQS.code


3. If  SQS.amount > 0 exists then system -- the sales quote is to be charged: Goods purchase, Insurance premium, fee

	
- creates a transaction in Account Transaction entity by Create CASH/POS transaction rule with parameters: 
- ContractSupplement
- transactionType
- initialStatus = 'NEW'
- transactionAmount = SQS.amountArrangements.transactionAmount
- paymentChannel = paymentChannelCode
- Sales Quote Applied reference (SQS.code)
- parentSalesQuote
- commodityId = if masterTransaction = TRUE, then get SalesQuote.specifications.value for key = 'COMMODITY_CODE' (if exists only), else NULL
- {ADD CSI-2861}purpose{/ADD}

END

## 🔗 Connections (3)

- → Dependency: [[Create CASH_POS transaction rule]]
- ← Dependency: [[13.116 Add Sales Quote to Transaction Supplement (UseCase 1881439)]]
- ← Dependency: [[{MOD}13.100 Create Transaction Supplement service]]

## 📊 Appears In (3 diagrams)

- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement request creation - Use case model
- Use Case: Transaction Supplement Sales Quote adding
