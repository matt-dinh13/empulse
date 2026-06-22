---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1415457
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Generate artificial outgoing payment for external consolidation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

This business rule describes creation of artificial ORDERPAY140 message for external contracts refinance amount

Input:
CELAccountTransactionRequest
(where CALPrincipalAccountTransaction.consolidationExtAmount > 0)

Algorithm:

System gets a record from FakeSalesroom table where Active = true and Usage = CONS.
If no such a record is found, the system logs an error and ends.

System creates a record in the comm table ORDERPAY140 with the following parameters:

	
- id_payout = new unique outgoing payment code (without PAYMENT prefix)


	
- id_orderpay_cancelled = IF (CELAccountTransactionRequest.OperationType = 'CANCEL') THEN get orderpay140.idPayout where: type R and idCredit =  (Get OBS contract identification(CELAccountTransactionRequest.ContractCode) OTHERWISE NULL


	
- id_credit = according to the rule Get OBS contract identification(CELAccountTransactionRequest.ContractCode))
	
- type_orderpay = R (external consolidation)


	
- sellerplace_code = FakeSalesroom.code
	
- transfer_type = 'd'


	
- bankcode = FakeSalesroom.bankCode
	
- num_account = FakeSalesroom.bankAccountNumber
	
- num_tech_account = null


	
- amount_pay = (CELAccountTransactionRequest.CELPrincipalAccountTransaction.consolidationExtAmount). If IF (CELAccountTransactionRequest.OperationType = 'CANCEL') THEN amount_pay*(-1)


	
- date_due = CELAccountTransactionRequest.TransactionDate
	
- kbe = FakeSalesroom.kbe


	
- beneficiary_name = FakeSalesroom.name
	
- beneficiary_number = FakeSalesroom.bin
	
- beneficiary_type = 'p'


	
- bank_name =FakeSalesroom.bankNme


	
- bank_number = FakeSalesroom.bankAccountNumber


	
- time_stamp = current timedate

## 🔗 Connections (1)

- ← Association: [[Processing CELPrincipalAccountTransaction]]

## 📊 Appears In (1 diagrams)

- Custom: Account Transactions - Business rules
