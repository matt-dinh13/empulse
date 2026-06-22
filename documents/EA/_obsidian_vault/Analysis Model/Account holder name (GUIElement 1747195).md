---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1747195
diagrams: 2
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account holder name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

Name of the bank account's holder.

Other:

	
- If Evaluate if verification of bank account for disb. channel is required returns false, this filed is always editable.
Otherwise the editibility is driven by specific rules on parent form/panel.


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account.Holder_Name
or
GetPaymentChannelResponse.paymentChannels.bankAccount.holderName
or
GetDDMResponse.ddmData.bankAccountData.accountHolderName


	
- //LDM for value saving
[*parent]->Bank_Account.Holder_Name
or
CreatePaymentChannelDraftRequest.bankAccount.holderName / 
UpdatePaymentChannelOrDraftRequest.bankAccount.holderName
or
CreateDDMDraftRequest.bankAccountData.accountHolderName / 
UpdateDDMOrDraftRequest.bankAccountData.accountHolderName


- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

Localization code:
ACC_HolderName


Applicable for APPLICATION FORM DISBURSEMENT BANK ACCOUNT only:

	
- If all following conditions are met, field is initially not editable (see use case 01.065 Verify bank account for application for more details regarding the field's editability, when this rule is applicable). Otherwise editable:
- user has the UC01_065 access right granted,
- product is selected and requires the external verification of client's bank account used for the money disbursement (i.e. Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Product_Variant->Product->Product_Flag[.Type->Product_Flag_Type.Code='DISB_BA_VERIF']),
- TempAppl_Bank_Account->TempAppl_Bank_Account_Verification[last].Result not in ('BANK_NOT_SUPPORTED', 'TECHNICAL_ERROR'). //User is entering the value manually if technical error occurs during the verification

## 🔗 Connections (3)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Account holder name (Action 1245069)]]
- → Dependency: [[{ADD}Evaluate if verification of bank account for disb. channel is required]]

## 📊 Appears In (2 diagrams)

- Custom: Create/Update bank account for DD - ID
- Custom: Create/Update bank account for disbursement - ID
