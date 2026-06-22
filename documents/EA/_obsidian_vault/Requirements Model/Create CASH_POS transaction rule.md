---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1740 - Update method for TransactionSupplement creation"
domain: "Requirements Model"
element_id: 1878817
diagrams: 4
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Create CASH/POS transaction rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/CSI-1740 - Update method for TransactionSupplement creation

## 📝 Notes

This rule describe creation either CASH, or POS transaction for REL account (cardless transaction) in the Account Transaction entity related to the Transaction Supplement.

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
	
- {ADD CSI-2861}purpose{/ADD}


1. Getting Account Transaction Setting configuration by transactionType and Active Flag = 1
2. Setting Account_Transaction object

	
- Contract referenced to ContractSupplement


	
- Amount_Billing = transactionAmount
	
- Amount_Original = transactionAmount
	
- Conversion Rate = Account Transaction Setting.Conversion_Rate


	
- Type = transactionType


	
- Data_Exchange_Id = generated GUID
	
- Place_Name = 'N/A'
	
- Status = initialStatus
	
- Transaction_Date = transactionDate


	
- Sub_Type = transactionSubType


	
- Created_By = the current user
	
- Payment Channel = paymentChannel
	
- reference to the Sales Quote
	
- Commodity External Id = commodityId (optional)
	
- {ADD CSI-2861}Purpose = purpose{/ADD}


3. Setting Transaction Status Transition object:
For Account_Transaction object described above, one Transaction_Status_Transition object is created:

	
- Status = initialStatus
	
- Created_By = the current user
	
- Created_Date = the current date and time


END

## 🔗 Connections (3)

- ← Dependency: [[Set Sales Quote values for Transaction Supplement]]
- ← Dependency: [[{MOD}13.114 Process transaction cancellation request]]
- ← Dependency: [[{MOD}13.110 Process account transaction for Transaction Supplement]]

## 📊 Appears In (4 diagrams)

- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement refunding - Use case model
- Use Case: Transaction Supplement Sales Quote adding
