---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310134
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Processing CELFeeAccountTransaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- CELFeeAccountTransaction


Algorithm:
1. System tries to find a record in ACCOPER156OperationType where ACCOPER156OperationType.Code = CELFeeAccountTransaction.tariffItemTypeCode. 
If no record is found, the algorithm ends. 
(i.e. it is supposed that not all fee transaction should be reported into OBS)

2. System creates a record in the comm table ACCOPER156 with the following parameters: 

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is CELFeeAccountTransaction->CELAccountTransactionsRequest.contractCode
	
- OperType = ACCOPER156OperationType.Value of the found record in the step 1


	
- OperValue = according to the CELFeeAccountTransaction->CELAccountTransactionsRequest.TypeOfOperation:
   - CELFeeAccountTransaction.amount if TypeOfOperation = CREATE
   - (-1) * CELFeeAccountTransaction.amount if TypeOfOperation = CANCEL


	
- DrawDate = CELFeeAccountTransaction->CELAccountTransactionsRequest.transactionDate


	
- CancelFlag = according to the CELFeeAccountTransaction->CELAccountTransactionsRequest.TypeOfOperation:
   - N (No) if TypeOfOperation = CREATE
   - Y (Yes) if TypeOfOperation = CANCEL


	
- IdSource = CELFeeAccountTransaction.finParamItemDataExchangeID
	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null

## 🔗 Connections (4)

- → Dependency: [[REQ#1 Messages TRANSAC150 and ACCOPER156]]
- → Dependency: [[Get OBS contract identification]]
- ← Dependency: [[Processing CELAccountTransactionsRequest]]
- ← Dependency: [[CELFeeAccountTransaction]]

## 📊 Appears In (3 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2203 - OBS interface - Transactions on contracts (CEL)
- Logical: CEL Account Transactions - Communication model
