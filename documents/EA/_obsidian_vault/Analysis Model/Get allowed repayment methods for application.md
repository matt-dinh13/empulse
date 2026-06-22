---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1878439
diagrams: 1
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Get allowed repayment methods for application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

This object describes the steps, how system gets the list of allowed repayment methods for the specific application.

Input:
- ApplicationCode = unique identifier of the application

Output:
- RepaymentMethod [0..n] = repayment method allowed for the respective application based on the system's configuration

Steps:

	
- System takes the ApplicationCode from the input and finds all repayment payment channel types available for the selected product, which are defined by the Payment_Channel_To_Product_Type.Payment_Channel_Type where all the following conditions are met:
   - Payment_Channel_To_Product_Type.Purpose = 'RE'
   - Payment_Channel_To_Product_Type.Product_Type = (Contract->)Temporary_Application[identified by ApplicationCode]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile.Product_Type
   - Payment_Channel_To_Product_Type.Transaction_Type = (Contract->)Temporary_Application[identified by ApplicationCode]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile.Initial_Transaction_Type
.
	
- System takes each payment channel type retrieved within the previous step and returns them to the calling object as RepaymentMethod.
	
- Algorithm ends.

## 🔗 Connections (8)

- ← Dependency: [[Repayment channel (GUIElement 1747610)]]
- ← Dependency: [[01.463 Change repayment channel externally (UseCase 1817775)]]
- ← Dependency: [[{MOD}01.460 Create DDM externally]]
- ← Dependency: [[{MOD}Repayment method (GUIElement 1820764)]]
- ← Dependency: [[Tab - Direct debit mandates (Screen 1821052)]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[01.659 Change application repayment payment channel (UseCase 1833499)]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
