---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN"
domain: "Analysis Model"
element_id: 1747136
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank branch

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN

## 📝 Notes

Bank branch, which is maintaining the account.

LDM source:

	
- [*parent]->Bank_Account->Bank_Branch.Name

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

or

	
- Bank_Branch[.Synchronization_Code=bankBranchSyncCode].Name

- where bankBranchSyncCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankBranchSyncCode / GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


Localization code:
GEN_BankBranchName

## 📊 Appears In (1 diagrams)

- Custom: Show bank account - IN
