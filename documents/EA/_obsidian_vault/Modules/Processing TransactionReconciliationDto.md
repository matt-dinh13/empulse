---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310133
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Processing TransactionReconciliationDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- TransactionReconciliationDto


Initialization:

	
- If TransactionReconciliationDto-> TransactionMessageDto.cancelled = true, the system logs an error and the algorithm ends. 


Algorithm:
System creates a record in the comm table TRANSAC161 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is TransactionReconciliationDto->TransactionMessageDto.contractCode 


	
- IdTransaction = TransactionReconciliationDto-> TransactionMessageDto.transactionSourceId -> TransactionSourceIdDto.sourceTxId
...without the first two characters if it begins with "TX"


	
- TransactionSource = according to the TransactionReconciliationDto-> TransactionMessageDto.source:
- BillingSystemType.HOMER_FEE -->ACCOPER
- BillingSystemType.HOMER_TX -->TRANSAC 
- BillingSystemType.CABUS --> CABUS
- BillingSystemType.OBS --> OBS
- BillingSystemType.HOMER --> HOMER

	
- IdReconciliation = TransactionReconciliationDto.reconciliationCode
	
- ReconciliationType =  according to the TransactionReconciliationDto.reconciliationType:
- ReconciliationType.OWN_FUNDS --> OWN_FUNDS 
- ReconciliationType.DEBT --> DEBT
- ReconciliationType.OVERDRAFT --> OVERDRAFT 
	
- TypeInform = always I (Insert)
	
- Amount = TransactionReconciliationDto.amount
	
- TimeStamp = current

## 🔗 Connections (3)

- ← Dependency: [[TransactionReconciliationDto (Class 1223771)]]
- → Dependency: [[REQ#1 Messages TRANSAC160 and TRANSAC161]]
- ← Dependency: [[Processing TransactionMessageDto]]

## 📊 Appears In (3 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2348 - OBS interface - Transactions on contracts (REL)
- Logical: REL Account Transactions - Communication model
