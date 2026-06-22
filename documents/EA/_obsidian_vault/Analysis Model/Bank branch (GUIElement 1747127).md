---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN"
domain: "Analysis Model"
element_id: 1747127
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank branch

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN

## 📝 Notes

Bank branch, which is maintaining the account.

Other:

	
- Enabled (editable) only if the District is filled in.
	
- Enumeration values are taken from the Bank Branch.Name and .Code (ordered by .Name ASC) and filtered based on the selected bank, region and district (i.e. Bank[.Name=Bank name]->Bank_Branch[.Region=State and .District=District].Name).

Note: Enumeration values are displayed in format Bank_Branch.Name + " / IFSC: " + Bank_Branch.Code


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch.Name and .Code
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode].Name and .Code

- where bankBranchSyncCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankBranchSyncCode / GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


	
- //LDM for value saving
Code of the selected bank branch(i.e. Bank_Branch.Code) is saved into:
   - [*parent]->Bank_Account.Bank_Branch_Code
   or
   - CreatePaymentChannelDraftRequest.bankAccount.bankBranchCode / 
   - UpdatePaymentChannelOrDraftRequest.bankAccount.bankBranchCode
OR
Synchronization code of the selected bank branch(i.e. Bank_Branch.Synchronization_Code) is saved into:
   - CreateDDMDraftRequest.bankAccountData.bankBranchSyncCode / 
   - UpdateDDMOrDraftRequest.bankAccountData.bankBranchSyncCode


- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

Localization code:
GEN_BankBranchName

## 🔗 Connections (1)

- → Dependency: [[Bank Branch (Class 1761502)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank acount - IN
