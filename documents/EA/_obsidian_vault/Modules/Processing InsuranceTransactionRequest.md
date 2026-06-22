---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310129
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Processing InsuranceTransactionRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- InsuranceTransactionRequest 


Algorithm:
System creates a record in the comm table TRANSAC150 with the following parameters: 

	
- Id = automatically generated unique identifier of the record
	
- IdCredit = according to the rule Get OBS contract identification, passed is InsuranceTransationRequest.contractCode
	
- SellerplaceCode = InsuranceTransationRequest->CELInsuranceAccountTransaction.insuranceCompanyCode
	
- TransacType = I (Insurance)
	
- TransValue = according to the InsuranceTransationRequest.TypeOfOperation:
   - InsuranceTransationRequest.amount if TypeOfOperation = CREATE
   - (-1) * InsuranceTransationRequest.amount if TypeOfOperation = CANCEL
	
- DrawDate = InsuranceTransationRequest.transactionDate
	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null

## 🔗 Connections (1)

- ← Dependency: [[InsuranceTransactionRequest (Class 1749966)]]

## 📊 Appears In (2 diagrams)

- Custom: Account Transactions - Business rules
- Logical: Additional insurance transaction - Communication model
