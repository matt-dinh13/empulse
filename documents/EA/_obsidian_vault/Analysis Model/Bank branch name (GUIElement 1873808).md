---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH"
domain: "Analysis Model"
element_id: 1873808
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank branch name

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH

## 📝 Notes

Bank branch, which is maintaining the account.

Other:

	
- Enumeration values are taken from the Bank Branch.Name (ordered by .Name ASC) and filtered based on the selected bank (i.e. Bank[.Name=Bank name]->Bank_Branch.Name).
	
- If there is only one bank branch available for the selected bank, then its value is automatically pre-selected and the field is disabled.


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch.Name
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode].Name

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

## 🔗 Connections (2)

- → Dependency: [[Bank Branch (Class 1761502)]]
- → Dependency: [[Bank branch name (Action 1351113)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank account - PH
