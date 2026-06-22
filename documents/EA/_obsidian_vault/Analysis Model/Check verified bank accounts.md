---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application"
domain: "Analysis Model"
element_id: 1822815
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check verified bank accounts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/UseCase Model - Fill in application

## 📝 Notes

If the selected Disbursement method is General bank account ('GBA') and the disbursement bank account must be verified externally (i.e. when Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameter->Product->Product_Flag[.Type->Product_Flag_Type.Code='DISB_BA_VERIF']), one of the following condition must be met:

	
- TempAppl_Bank_Account_Verification[last].Result where .Account_Number reflects the bank account entered on the application form is in ('VERIFIED', 'BANK_NOT_SUPPORTED').
	
- TempAppl_Bank_Account_Verification[last].Result where .Account_Number reflects the bank account entered on the application form is 'TECHNICAL_ERROR'
AND
TempAppl_Bank_Account_Verification[last].Remaining_Attempts where .Account_Number reflects the bank account entered on the application form is less than or equal to 0.


This validation is performed only if the privilege UC01_065 is granted to the user.

## 🔗 Connections (1)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (1 diagrams)

- Use Case: Fill in application
