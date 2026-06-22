---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1747203
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ BI code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

BI code of the bank branch, which is maintaining the account - used as an input field for searching of the particular bank branch.

Procedure for bank branch searching:

	
- User fills in the BI code value (plain text without an auto-complete feature) and moves the focus out of this field.
	
- System tries to search the corresponding record in the Bank branch list (i.e. Bank_Branch.MICR = BI code).
	
- If found, then system automatically pre-fills the Bank name and Bank branch fields with corresponding values from the related structures.
- Fields Bank name and Bank branch are enabled and editable no matter whether the bank branch has been found in the list or not.
- There is no checking if entered BI code corresponds with Bank name and Bank branch in the Bank branch list.


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch.MICR

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode].MICR

- where bankBranchSyncCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankBranchSyncCode / GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


	
- //LDM for value saving
Note: Selected value is not actually saved; it is used as a filtering input for other form fields only.


Localization code:
GEN_MICR

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank acount - ID
