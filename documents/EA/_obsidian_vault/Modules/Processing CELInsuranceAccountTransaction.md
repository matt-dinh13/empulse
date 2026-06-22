---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310135
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Processing CELInsuranceAccountTransaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- CELInsuranceAccountTransaction


Algorithm:
System creates a record in the comm table TRANSAC150 with the following parameters: 

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is CELInsuranceAccountTransaction->CELAccountTransactionsRequest.contractCode
	
- SellerplaceCode = CELInsuranceAccountTransaction.insuranceCompanyCode
	
- TransacType = I (Insurance)
	
- TransValue = according to the CELInsuranceAccountTransaction->CELAccountTransactionsRequest.TypeOfOperation:
   - CELInsuranceAccountTransaction.amount if TypeOfOperation = CREATE
   - (-1) * CELInsuranceAccountTransaction.amount if TypeOfOperation = CANCEL
	
- DrawDate = CELInsuranceAccountTransaction->CELAccountTransactionsRequest.transactionDate
	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null

## 🔗 Connections (4)

- → Dependency: [[Get OBS contract identification]]
- → Dependency: [[REQ#1 Messages TRANSAC150 and ACCOPER156]]
- ← Dependency: [[Processing CELAccountTransactionsRequest]]
- ← Dependency: [[CELInsuranceAccountTransaction]]

## 📊 Appears In (3 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2203 - OBS interface - Transactions on contracts (CEL)
- Logical: CEL Account Transactions - Communication model
