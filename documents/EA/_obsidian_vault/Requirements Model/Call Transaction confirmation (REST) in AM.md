---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL"
domain: "Requirements Model"
element_id: 1878830
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Call Transaction confirmation (REST) in AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL

## 📝 Notes

{ADD CSI-2912 /}
-- common function for creation of transaction confirmation request in AM
Input parameters:

	
- AccountTransaction object
	
- chargeTransactionInPast
	
- originalSourceTxId (optional)
	
- loanCode (optional)
	
- transactionSupplementId (optional) = transactionSupplementCode


Steps:

	
- System call confirm transaction service - https://<environment>/cabus-am/rest/api/public/v1/accounts/{Contract.Credit Account Number}/transaction with the body: 
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
.commodities:
  - commodityId = ContractSupplement.Sales Quote Applied -> Account Transaction.Commodity External Id (if exists)
.attributes (key - value structure): -- structure is only created when the value is not null!!
--- key = paymentChannelDataExchangeId; value = Account Transaction.Payment Channel Id
--- array of attributes taken from ContractSupplement -> Contract Supplement Custom Data.Code; where key = ContractSupplement -> Contract Supplement Custom Data.Value. Only Code in ('dealer') is taken into account -- codes are defined in ADS.additionalData
	
- If the call failed with HTTP 400, 404, 5xx,  system logs the error message returned by AM system
If call (e.g. timeout happen) or other error, system logs an error message MSG_ACC_ServiceUnavailable in the information area
	
- If the call ends with HTTP201 (OK), system continues with next steps of the calling UC

## 🔗 Connections (2)

- ← Dependency: [[{MOD}13.114 Process transaction cancellation request]]
- ← Dependency: [[{MOD}13.110 Process account transaction for Transaction Supplement]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL
- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement refunding - Use case model
