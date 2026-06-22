---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783629
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Region

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

## 📝 Notes

Region of the bank branch, which is maintaining the account.

Other:

	
- Enabled (editable) only if the Bank name is filled in.
	
- Empty by default (when no value is available on the respective bank account yet).
	
- Enumeration values are taken from the Bank Branch.Region (distinct and ordered by .Name ASC) and filtered based on the selected bank (i.e. Bank[.Name=Bank name]->Bank_Branch.Region).


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch.Region

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode].Region

- where bankBranchSyncCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankBranchSyncCode / GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode
	
- //LDM for value saving
Note: Selected value is not actually saved; it is used as a filtering input for other form fields only.


Localization code:
ADR_Region

## 🔗 Connections (1)

- → Dependency: [[Province (Action 1639474)]]

## 📊 Appears In (1 diagrams)

- Custom: Bank account in AF - VN
