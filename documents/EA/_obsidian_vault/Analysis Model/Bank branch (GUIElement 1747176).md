---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ"
domain: "Analysis Model"
element_id: 1747176
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank branch

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ

## 📝 Notes

Bank branch, which is maintaining the account.

Other:

	
- Enabled (editable) only if the Bank name is filled in.
	
- Enumeration values (for autocompletion) are taken from the Bank Branch.Name (ordered by .Name ASC) and filtered based on the selected bank (i.e. Bank[.Name=Bank name]->Bank_Branch.Name).
- Each shown enumeration value is constructed by concatenating the name (Bank_Branch.Name) and code (Bank_Branch.Code) of respective bank branch, where the bank branch code is placed in the parenthesis.

Example:
   - Bank_Branch.Name = 'National Bank of Kazakhstan'
   - Bank_Branch.Code = 'KZ_NATIONAL_BANK'
The result enumeration value is then displayed as follows:
    National Bank of Kazakhstan (KZ_NATIONAL_BANK)


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

## 🔗 Connections (2)

- → Dependency: [[Bank branch]]
- → Dependency: [[Only codelist values can be selected (Action 1036831)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank account for consolidation - KZ
