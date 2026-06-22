---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model"
domain: "Analysis Model"
element_id: 1776323
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Repeated cash transaction creation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model

## 📝 Notes

This rule describe creation of Repeated Cash Disbursement transaction for REL account (cardless transaction) in the Account Transaction entity.

Input parameters:

	
- transactionAmount


Setting Account_Transaction object

	
- reference to the processed Contract
	
- Amount_Billing = transactionAmount
	
- Amount_Original = transactionAmount
	
- Conversion Rate = Account_Transaction_Setting.Conversion_Rate


	
- Type = 'RCD'


	
- Data_Exchange_Id = concatenated 'TX'+a unique number (e.g. DB sequence ID)
	
- Place_Name = 'N/A'
	
- Status = 'SENT_TO_AUTHORIZATION'
	
- Transaction_Date = current date


	
- Sub_Type = 'CL'


	
- Created_By = the current user


Setting Transaction Status Transition object:
For Account_Transaction object described above, one Transaction_Status_Transition object is created:

	
- Status = 'SENT_TO_AUTHORIZATION'
	
- Created_By = the current user
	
- Created_Date = the current date and time

## 🔗 Connections (1)

- ← Dependency: [[12.630 Create request for CASH transaction without card]]

## 📊 Appears In (2 diagrams)

- Use Case: Cardless transaction request - Use case model
- Use Case: CSI-2848 KZ - LOP support in BSL update
