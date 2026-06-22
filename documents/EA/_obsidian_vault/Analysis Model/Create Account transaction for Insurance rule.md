---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features"
domain: "Analysis Model"
element_id: 1876175
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create Account transaction for Insurance rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features

## 📝 Notes

Input:

	
- Contract
	
- List of Insurance Contracts related to the Contract with the Insurance Periods are to be processed
	
- {ADD CLM-846}UsedTariffItemCode{/ADD}


Setting Account_Transaction object:
For each Insurance_Contract and related Insurance Period from input one Account_Transaction object is created with:

	
- Type =  'INS'
	
- Type Variant = {ADD CLM-846}Type Code from Tariff Item having Code = UsedTariffItemCode{/ADD}{DEL CLM-846}'MONTHLY_INSURANCE'{/ADD}


	
- Sub_Type = 'UNKNOWN'


	
- Amount_Billing = Insurance_Contract->Insurance_Period.Premium * Conversion_Rate
	
- Amount_Original = Insurance_Contract->Insurance_Period.Premium
	
- Conversion_Rate = Account_Transaction_Setting.Conversion_Rate
	
- Insurance_contract_code = Insurance_Contract.Contract_code


	
- External_ID = concatenated 'TX'+a unique number (e.g. DB record ID)
	
- Place_Name = Salesroom.Name of Salesroom related to the contract
	
- Status = 'SENT_TO_CONFIRMATION'
	
- Tariff_Item_Group_Code = value determined by Find Tariff Item Group for Transaction
	
- Transaction_Date = current date


Setting Transaction Status Transition object:
For each Account_Transaction object described above, one Transaction_Status_Transition object is created:

	
- Status = 'SENT_TO_CONFIRMATION'
	
- Created_By = the current user
	
- Created_Date = the current date and time

## 🔗 Connections (1)

- ← Dependency: [[01.739 Process Account Balance Change EOM notification]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance based on AccountBalanceChange EOM event
