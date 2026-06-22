---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Business rules"
domain: "Analysis Model"
element_id: 1265764
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Initial transaction creation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Business rules

## 📝 Notes

This rule describes creation of Account_Transaction objects for the Initial Transaction on a contract.

Setting Account_Transaction object - loan principal
 If Contract->Financial_Parameters.Initial_Transaction is in ('POS', 'CASH'), then: 

	
- Amount_Billing = Contract->Financial_Parameters.Net_Credit_Amount * Conversion_Rate
	
- Amount_Original = Contract->Financial_Parameters.Net_Credit_Amount
	
- Conversion Rate = Account_Transaction_Setting.Conversion_Rate


	
- Type = 'IPD' if Financial_Parameters.Initial_Transaction_Type = 'POS'
	
- Type = 'ICD' if Financial_Parameters.Initial_Transaction_Type = 'CASH'


Setting Account Transaction object - insurance
If Contract->Financial_Parameters.Initial_Transaction is in ('POS', 'CASH'), then for each Insurance_Contract related to the contract and having active Insurance Period one Account_Transaction object is created with:

	
- Type =  'IIS'


	
- Sub_Type = 'UNKNOWN'


	
- Amount_Billing = Insurance_Contract->Insurance_Period.Premium * Conversion_Rate
	
- Amount_Original = Insurance_Contract->Insurance_Period.Premium
	
- Conversion_Rate = Account_Transaction_Setting.Conversion_Rate
	
- Insurance_contract_code = Insurance_Contract.Contract_code


Setting Account Transaction object - fee (possible origination fee on the initial transaction)
For each  Contract->Financial_Parameters.Fin_Parameter_Item one Account_Transaction object is created. Correct fee type is determined as: Tariff_Item from Contract->Financial_Parameters.Fin_Parameter_Item having Tariff_Item_Type.Charging_Periodicity = 'ONE_TIME' and Usage = 'A' (standard)

	
- Type = 'FEE'


	
- Sub_Type = 'UNKNOWN'


	
- Amount_Billing = Contract->Financial_Parameters.Fin_Parameter_Item.Amount * Conversion_Rate
	
- Amount_Original = Contract->Financial_Parameters.Fin_Parameter_Item.Amount
	
- Conversion_Rate = Account_Transaction_Setting.Conversion_Rate
	
- Tariff_Item_Code = Fin_Parameter_Item->Tariff_Item.Type.Tariff_Item_Type.Code


Setting COMMON attributes of Account Transaction object (loan principal, insurance and other):

	
- Data_Exchange_ID = concatenated 'TX'+a unique number (e.g. DB record ID)
	
- Place_Name = Salesroom.Name of Salesroom where the contracts was signed. It is get according to the rule Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED
	
- Status = 'SENT_TO_CONFIRMATION'
	
- Tariff_Item_Group_Code = value determined by Find Tariff Item Group for Transaction
	
- Transaction_Date = current date

If Financial Parameters.Initial Transaction = 'POS'

	
- Sub_Type = If any commodity on the contract is vehicle (Contract -> Commodity -> Commodity Type.CommodityTypeFlag(IS_VEHICLE) = TRUE) then 'TW' else 'CD'

If Financial Parameters.Initial Transaction = 'CASH'

	
- Sub_Type = 'CL'


Setting Transaction Status Transition object:
For each Account_Transaction object described above, one Transaction_Status_Transition object is created:

	
- Status = 'SENT_TO_CONFIRMATION'
	
- Created_By = the current user
	
- Created_Date = the current date and time

## 🔗 Connections (4)

- → Dependency: [[Generate one time processing fee also for product with Initial transaction = Not defined]]
- → Dependency: [[Find Tariff Item Group for account transaction]]
- ← Dependency: [[01.770 Process account transaction notification (UseCase 1875616)]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Custom: CBL-2271 (TIN-9832) IN HCPAY - Onetime processing fee
- Use Case: Contract signing
- Use Case: Processing of first transaction notification
