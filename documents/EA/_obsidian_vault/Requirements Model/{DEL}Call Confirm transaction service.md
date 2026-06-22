---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL"
domain: "Requirements Model"
element_id: 1878815
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {DEL}Call Confirm transaction service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL

## 📝 Notes

{DEL CSI-2912 /}
-- common function for creation of transaction confirmation request in AM
Additional input parameters:

	
- chargeTransactionInPast
	
- originalSourceTxId (optional)
	
- loanCode (optional)
	
- transactionSupplementId = transactionSupplementCode


Steps:

	
- System call authorization service - ConfirmTransactionWithIPConversion of AccountTransactionWS with the ConfirmTransactionWithIPConversionRequest based on Account Transaction object data created in the previous step: 
.offerCode = ContractSupplement ->Sales Quote Applied.Sales Quote Id (referenced to  Account Transaction)
.loanCode = loanCode 
.transactionSupplementId = transactionSupplementCode
.originalTrxSourceID:
- sourceSystem = ContractSupplement.Request Source.Source System
- sourceTxId = originalSourceTxId}
.transaction:
- authorizationSourceID.sourceSystem = ContractSupplement.Request Source.Source System
- authorizationSourceID.sourceTxId = ContractSupplement ->Account Transaction.Data_Exchange_Id
- confirmationDate = Account Transaction.Transaction_Date
- reconciliationAmount = Account Transaction.Amount Billing
- accountNumber = Contract.Credit Account Number
- transactionAmount = Account Transaction.Amount Original
- transactionDate = Account Transaction.Transaction_Date
- transactionType = Account Transaction.Type
- sourceTransactionId.sourceSystem = ContractSupplement.Request Source.Source System
- sourceTransactionId.sourceTxId = ContractSupplement ->Account Transaction.Data_Exchange_Id
- chargeTransactionInPast = chargeTransactionInPast
- commodities:
--- commodityId = ContractSupplement.Sales Quote Applied -> Account Transaction.Commodity External Id (if exists)
- attributes (key - value structure): -- structure is only created when the value is not null!!
--- key = paymentChannelDataExchangeId; value = Account Transaction.Payment Channel Id
--- array of attributes taken from ContractSupplement -> Contract Supplement Custom Data.Code; where key = ContractSupplement -> Contract Supplement Custom Data.Value. Only Code in ('dealer') is taken into account -- codes are defined in ADS.additionalData
--- //salesroomCode = Code of the Salesroom where the user is logged on --it isn't needed, confirmed with AM
	
- If the call failed (e.g. timeout happen) or other error, system shows an error message MSG_ACC_ServiceUnavailable in the information area and use case ends
	
- System returns the ConfirmTransactionWithIPConversionResponse

## 🔗 Connections (1)

- ← Dependency: [[{MOD}13.114 Process transaction cancellation request]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-21490 (CSI-2856) Solution to add BNPL New Partners without Config CBL
