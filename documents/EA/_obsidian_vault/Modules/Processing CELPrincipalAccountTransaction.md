---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310130
diagrams: 4
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Processing CELPrincipalAccountTransaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- CELPrincipalAccountTransaction


Algorithm:
System computes:

	
- consolidatedAmount = CELPrincipalAccountTransaction.refinancedAmount   ...if null, than 0
	
- disbursementAmount = (CELPrincipalAccountTransaction.amount - consolidatedAmount)



//One record for non-zero disbursement 
If disbursementAmount > 0, the system creates a record in the comm table TRANSAC150 with the following parameters: 

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is CELPrincipalAccountTransaction->CELAccountTransactionsRequest.contractCode
	
- SellerplaceCode = CELPrincipalAccountTransaction->CELAccountTransactionsRequest.salesroomCode
	
- TransacType = G (Goods)    ...it is still G (Goods) even if the transaction may be CashLoan
	
- TransValue = according to the CELPrincipalAccountTransaction->CELAccountTransactionsRequest.TypeOfOperation:
   - disbursementAmount if TypeOfOperation = CREATE
   - (-1) * disbursementAmount if TypeOfOperation = CANCEL


	
- DrawDate = CELPrincipalAccountTransaction->CELAccountTransactionsRequest.transactionDate


	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null


//One record for non-zero {ADD CBL-3640} internal {/ADD CBL-3640} consolidation amount
If consolidationAmount > 0, the system:
- gets a record from FakeSalesroom table where Active = true and Usage = CONS.
If no such a record is found, the system logs an error and ends.
- creates a record in the comm table TRANSAC150 with the following parameters: 

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is CELPrincipalAccountTransaction->CELAccountTransactionsRequest.contractCode
	
- SellerplaceCode = FakeSalesroom.code
	
- TransacType = K (Consolidation)
	
- TransValue = according to the CELPrincipalAccountTransaction->CELAccountTransactionsRequest.TypeOfOperation:
   - consolidatedAmount if TypeOfOperation = CREATE
   - (-1) *consolidatedAmount if TypeOfOperation = CANCEL


	
- DrawDate = CELPrincipalAccountTransaction->CELAccountTransactionsRequest.transactionDate


	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null


{ADD CBL-3640}
//One record for non-zero external consolidation amount 
If consolidationExtAmount > 0, the system:
- gets a record from FakeSalesroom table where Active = true and Usage = CONS.
If no such a record is found, the system logs an error and ends.
- creates a record in the comm table TRANSAC150 with the following parameters: 

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is CELPrincipalAccountTransaction->CELAccountTransactionsRequest.contractCode
	
- SellerplaceCode = FakeSalesroom.code
	
- TransacType = R (Consolidation)
	
- TransValue = according to the CELPrincipalAccountTransaction->CELAccountTransactionsRequest.TypeOfOperation:
   if TypeOfOperation = CREATE then consolidatedAmount 
   if TypeOfOperation = CANCEL then (-1) *consolidatedAmount 


	
- DrawDate = CELPrincipalAccountTransaction->CELAccountTransactionsRequest.transactionDate


	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null


If CELPrincipalAccountTransaction.consolidatedExtAmount > 0 then run business rule Generate artificial outgoing payment for external consolidation
{/ADD CBL-3640}

## 🔗 Connections (6)

- ← Dependency: [[REQ#3 TRANSAC150 processing]]
- → Dependency: [[Get OBS contract identification]]
- → Dependency: [[REQ#1 Messages TRANSAC150 and ACCOPER156]]
- ← Dependency: [[Processing CELAccountTransactionsRequest]]
- → Association: [[Generate artificial outgoing payment for external consolidation]]
- ← Dependency: [[CELPrincipalAccountTransaction]]

## 📊 Appears In (4 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2203 - OBS interface - Transactions on contracts (CEL)
- Custom: CBL-817 - Change to BSL and CBSA module by consolidation process
- Logical: CEL Account Transactions - Communication model
