---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878453
diagrams: 0
connections: 8
tags:
  - requirement
  - _uncategorized
---

# 📋 Get allowed disbursement methods for application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system gets the list of allowed disbursement methods for the specific application.

Input:
- ApplicationCode = unique identifier of the application

Output:
- DisbursementMethod [0..n] = disbursement method allowed for the respective application based on the system's configuration

Steps:

	
- System takes the ApplicationCode from the input and finds all disbursement payment channel types forming an intersection of both following configurations:

1.1.  Disbursement payment channel types available for the selected product
Disbursement payment channel types available for the selected product are defined by the Payment_Channel_To_Product_Type.Payment_Channel_Type where all the following conditions are met:
   - Payment_Channel_To_Product_Type.Purpose = 'DI'
   - Payment_Channel_To_Product_Type.Product_Type = (Contract->)Temporary_Application[identified by ApplicationCode]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile.Product_Type
   - Payment_Channel_To_Product_Type.Transaction_Type = (Contract->)Temporary_Application[identified by ApplicationCode]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile.Initial_Transaction_Type

1.2.  Disbursement payment channel types available for the application's salesroom
Disbursement payment channel types available for the application's salesroom are retrieved according to the rule Get available disbursement channels for salesroom with following parameters on the input:
   - SalesroomCode = code of the salesroom got according to the rule Get salesroom by operation with Contract = ApplicationCode and Operation = 'APPLICATION_CREATED' on the input
   - ProductType = (Contract->)Temporary_Application[identified by ApplicationCode]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile.Product_Type
   - InitialTransactionType = (Contract->)Temporary_Application[identified by ApplicationCode]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Profile.Initial_Transaction_Type
Particular disbursement payment channel types available for the respective salesroom are defined by individual DisbursementChannel[Disbursement_Channel] values returned on the rule's output.
..
	
- System takes each payment channel type retrieved within the previous step and returns them to the calling object as DisbursementMethod.
	
- Algorithm ends.

## 🔗 Connections (8)

- ← Dependency: [[Disbursement method (GUIElement 1820256)]]
- ← Dependency: [[{MOD}Disbursement method]]
- ← Dependency: [[Use DDM account for credit disbursement (GUIElement 1820766)]]
- ← Dependency: [[{MOD}01.661 Change application disbursement payment channel]]
- ← Dependency: [[Disbursement method (GUIElement 1873897)]]
- → Dependency: [[Get salesroom by operation]]
- → Dependency: [[Get available disbursement channels for salesroom]]
- ← Dependency: [[{MOD}01.662 Change disbursement channel]]
