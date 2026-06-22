---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN"
domain: "Analysis Model"
element_id: 1747142
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ District

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN

## 📝 Notes

District of the bank branch, which is maintaining the account.

Other:

	
- Enabled (editable) only if the State is filled in.
	
- Enumeration values are taken from the Bank Branch.District (distinct and ordered by .Name ASC) and filtered based on the selected bank and region (i.e. Bank[.Name=Bank name]->Bank_Branch[.Region=State].District).


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch.District

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).
or
Bank_Branch[.Code=bankBranchCode].District

- where bankBranchCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankBranchCode
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode]->Bank.District

- where bankBranchSyncCode is taken from GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode
	
- //LDM for value saving
Note: Selected value is not actually saved; it is used as a filtering input for other form fields only.


Localization code:
ADR_District

## 🔗 Connections (1)

- → Dependency: [[Bank Branch (Class 1761502)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank acount - IN
