---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model"
domain: "Analysis Model"
element_id: 1776324
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Repeated POS transaction creation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model

## 📝 Notes

This rule describe creation of Repeated POS Disbursement transaction for REL account (cardless transaction) in the Account Transaction entity.

Input parameters:

	
- transactionAmount
	
- commodityExternalId


Setting Account_Transaction object

	
- reference to the processed Contract
	
- Amount_Billing = transactionAmount
	
- Amount_Original = transactionAmount
	
- Conversion Rate = AccountTransactionSetting.Conversion_Rate


	
- Type = 'RPD'


	
- Data_Exchange_Id = concatenated 'TX'+a unique number (e.g. DB sequence ID)
	
- Commodity External Id = commodityExternalId
	
- Place_Name = 'N/A'
	
- Status = 'NEW'
	
- Transaction_Date = current date


	
- Sub_Type =  check CommodityWS.GetCommodityTypeData and evaluate response Flag. If the commodity is vehicle (IS_VEHICLE flag exists) then 'TW' else 'CD' 


	
- Created_By = the current user


Setting Transaction Status Transition object:
For Account_Transaction object described above, one Transaction_Status_Transition object is created:

	
- Status = 'NEW'
	
- Created_By = the current user
	
- Created_Date = the current date and time

## 🔗 Connections (1)

- ← Dependency: [[12.632 Create request for POS transaction without card]]

## 📊 Appears In (1 diagrams)

- Use Case: Cardless transaction request - Use case model
