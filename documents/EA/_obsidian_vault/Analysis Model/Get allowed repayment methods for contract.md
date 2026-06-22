---
type: Requirement
stereotype: "Bussiness rule"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Repayments channel management/Business rules"
domain: "Analysis Model"
element_id: 1644192
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get allowed repayment methods for contract

> **Type**: Requirement · **Stereotype**: «Bussiness rule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Repayments channel management/Business rules

## 📝 Notes

This object describes the steps, how system gets the list of allowed repayment methods for the specific contract.

Input:
- ContractCode = unique identifier of the contract

Output:
- RepaymentMethod [0..n] = repayment method allowed for the respective contract based on the system's configuration

Steps:

	
- System takes the ContractCode from the input and finds all repayment payment channel types available for the selected product, which are defined by the Payment_Channel_To_Product_Type.Payment_Channel_Type where all the following conditions are met:
   - Payment_Channel_To_Product_Type.Purpose = 'RE'
   - Payment_Channel_To_Product_Type.Product_Type = Contract[.Contract_Code=ContractCode].Contract_Type
   - Payment_Channel_To_Product_Type.Transaction_Type = Contract[.Contract_Code=ContractCode]->Offer_Financial_Parameters[.Chosen=TRUE]->Product_Variant->Product->Product_Profile.Initial_Transaction_Type
.
	
- System takes each payment channel type retrieved within the previous step and returns them to the calling object as RepaymentMethod.
	
- Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[01.660 Change repayment channel (UseCase 1673777)]]
- ← Dependency: [[Tab-Direct debit mandates (Screen 1784591)]]
- ← Dependency: [[01.275 Show registration tab]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Custom: Tab-Direct debit mandates
- Custom: Tab-Payment channels
- Use Case: Change repayment channel
