---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Cross validations"
domain: "Analysis Model"
element_id: 1775342
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Obligation of Bank Validation document

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/ID/Cross validations

## 📝 Notes

If selected product requires the external verification of client's bank account used for the money disbursement (i.e. Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameter->Product->Product_Flag[.Type->Product_Flag_Type.Code='DISB_BA_VERIF']) and the disbursement bank account could not be successfully verified due to some technical issues (i.e. TempAppl_Bank_Account->TempAppl_Bank_Account_Verification[last].Result is in ('BANK_NOT_SUPPORTED', 'TECHNICAL_ERROR')), then document of type 'BANK_VALIDATION' is mandatory and has to have its content uploaded (otherwise message MSG_NECESSARY_DOCUMENT_MISSING is displayed).

## 🔗 Connections (1)

- ← Dependency: [[Obligation of Bank Validation document (Action 1775351)]]

## 📊 Appears In (1 diagrams)

- Custom: Cross validations
