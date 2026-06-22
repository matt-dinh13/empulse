---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870129
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Create Confirm Transaction Request for AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

{ADD DOBA-218  /}
-- common function for creation of transaction confirmation request in AM
Message body is the same as for original REST API call https://<environment>/cabus-am/rest/api/public/v1/accounts/{Contract.Credit Account Number}/transaction (ConfirmTransactionRequestV1)
Input parameters:

	
- AccountTransaction object
	
- chargeTransactionInPast
	
- originalSourceTxId (optional)
	
- loanCode (optional)
	
- transactionSupplementId (optional) = contractSupplementCode


Steps:

	
- System created ConfirmTransactionRequest message with the body: 
.offerCode = ContractSupplement ->Sales Quote Applied.Sales Quote Id (referenced to  Account Transaction)
.loanCode = loanCode 
.transactionSupplementId = transactionSupplementCode
.originalTrxSourceID = originalSourceTxId
.authorizationSourceID
- sourceSystem = ContractSupplement.Request Source.Source System
- sourceTxId = ContractSupplement ->Account Transaction.Data_Exchange_Id
.confirmationDate = Account Transaction.Transaction_Date
.reconciliationAmount
  - value = AccountTransaction.Amount Billing
  - currency = AccountTransaction.Amount Billing Curr
.accountNumber = Contract.Credit Account Number
.transactionAmount
  - value = AccountTransaction.Amount Original
  - currency = AccountTransaction.Amount Billing Curr
.transactionDate = Account Transaction.Transaction_Date
.transactionType = Account Transaction.Type
.sourceTransactionId
  - sourceSystem = ContractSupplement.Request Source.Source System
  - sourceTxId = ContractSupplement ->Account Transaction.Data_Exchange_Id
.chargeTransactionInPast = chargeTransactionInPast
.commodities (array of values):
  - commodityId = ContractSupplement.Sales Quote Applied -> Account Transaction.Commodity External Id (if exists)
   - commodityId = all existing values (array) ContractSupplement -> Contract Supplement Custom Data.Value where Contract Supplement Custom Data.Code = 'commodityId' -- data loaded originally from ADS
.attributes (key - value structure): -- structure is only created when the value is not null!!
--- key = paymentChannelDataExchangeId; value = Account Transaction.Payment Channel Id
--- array of attributes taken from ContractSupplement -> Contract Supplement Custom Data.Code and Value; 
    Only following codes are taken into account - 'dealer',  'seller' OR 'SELLER' - sent always as 'seller', 'discountAmount', 'voucherCode', 'cashPayment' -- codes are defined in ADS.additionalData or in SQS
	
- System sends the message into the exchange = am.direct.incoming.transaction with routing-key = transaction.confirmationWithIP

## 🔗 Connections (1)

- ← Dependency: [[{ADD}13.060 Process account transaction for Transaction Supplement]]

## 📊 Appears In (1 diagrams)

- Use Case: Confirm Contract Supplement transactions - Use Case Model
