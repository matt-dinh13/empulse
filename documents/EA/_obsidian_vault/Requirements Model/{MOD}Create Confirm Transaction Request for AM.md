---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode"
domain: "Requirements Model"
element_id: 1878819
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Create Confirm Transaction Request for AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode

## 📝 Notes

{ADD CSI-3619 /}
-- common function for creation of transaction confirmation request in AM
Message body is the same as for original REST API call https://<environment>/cabus-am/rest/api/public/v1/accounts/{Contract.Credit Account Number}/transaction (ConfirmTransactionRequestV1)
Input parameters:

	
- AccountTransaction object
	
- chargeTransactionInPast
	
- originalSourceTxId (optional)
	
- loanCode (optional)
	
- transactionSupplementId (optional) = transactionSupplementCode


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
  {ADD CSI-3705} - commodityId = all existing values (array) ContractSupplement -> Contract Supplement Custom Data.Value where Contract Supplement Custom Data.Code = 'commodityId' (used for VN only, data loaded originally from ADS) {/ADD}
.attributes (key - value structure): -- structure is only created when the value is not null!!
--- key = paymentChannelDataExchangeId; value = Account Transaction.Payment Channel Id
--- array of attributes taken from ContractSupplement -> Contract Supplement Custom Data.Code and Value; 
    Only following codes are taken into account - 'dealer', {ADD CSI-3705} 'seller' OR 'SELLER' - sent always as 'seller', 'discountAmount', 'voucherCode', 'cashPayment' {/ADD} -- codes are defined in ADS.additionalData or in SQS
	
- System sends the message into the exchange = am.direct.incoming.transaction with routing-key = transaction.confirmationWithIP

## 🔗 Connections (2)

- ← Dependency: [[{MOD}13.114 Process transaction cancellation request]]
- ← Dependency: [[{MOD}13.110 Process account transaction for Transaction Supplement]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Use Case: Transaction Supplement authorization/confirmation - Use case model
