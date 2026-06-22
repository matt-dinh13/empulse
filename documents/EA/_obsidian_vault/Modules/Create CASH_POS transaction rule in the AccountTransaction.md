---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1870138
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Create CASH/POS transaction rule in the AccountTransaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

This rule describes creation either CASH, or POS transaction for REL account (cardless transaction) in the Account Transaction entity related to the Transaction Supplement.

Input parameters:

	
- ContractSupplement
	
- transactionType
	
- transactionAmount
	
- transactionDate = current date
	
- initialStatus
	
- transactionSubType (optional)
	
- salesQuote reference
	
- paymentChannel
	
- commodityId (optional)
	
- purpose -- transaction is broken down in a IP type


{DEL DOBA-194}1. Getting Account Transaction Setting configuration by transactionType and Active Flag = 1{/DEL}-- this setting table is no longer used
2. Setting Account_Transaction object

	
- Amount_Billing = transactionAmount
	
- Amount_Original = transactionAmount
	
- Conversion Rate = {ADD DOBA-194}1{/ADD}{DEL DOBA-194}Account Transaction Setting.Conversion_Rate{/DEL}


	
- Type = transactionType


	
- Data_Exchange_Id = generated GUID
	
- Place_Name = 'N/A'
	
- Status = initialStatus
	
- Transaction_Date = transactionDate


	
- Sub_Type = transactionSubType


	
- Created_By = the current user
	
- Payment Channel = paymentChannel
	
- reference to the Sales Quote Item
	
- Commodity External Id = commodityId (optional)
	
- Purpose = purpose


3. Setting Transaction Status Transition object:
For Account_Transaction object described above, one Transaction_Status_Transition object is created:

	
- Status = initialStatus
	
- Created_By = the current user
	
- Created_Date = the current date and time


END

## 🔗 Connections (1)

- ← Dependency: [[13.020 Add Sales Quote to Contract Supplement]]

## 📊 Appears In (1 diagrams)

- Use Case: Add Sales Quote to Contract Supplement - Use Case Model
