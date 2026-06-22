---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1747188
diagrams: 2
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank name

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

Bank, which is maintaining the account.

Other:

	
- Enumeration values are taken from the Bank.Name (ordered by .Name ASC).
	
- It works as an auto-complete combobox.
- The user can type any string there.
- If an user types at least one character, the system filters records which contain (anywhere) typed string.
- If an user does not type any character, the list contain all records.
- The records (filtered list as well as whole the list) are sorted alphabetically.


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch->Bank.Name

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).
or
Bank[.Code=bankCode].Name

- where bankCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankCode
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode]->Bank.Name

- where bankBranchSyncCode is taken from GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


	
- //LDM for value saving
Note: Selected value is not actually saved; it is used as a filtering input for other form fields only.


Localization code:
GEN_BankName

## 🔗 Connections (3)

- → Dependency: [[Bank name (Action 1245068)]]
- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Bank usable for direct debiting - ID]]

## 📊 Appears In (2 diagrams)

- Custom: Create/Update bank account for DD - ID
- Custom: Create/Update bank account for disbursement - ID
