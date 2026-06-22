---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783628
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

## 📝 Notes

Bank, which is maintaining the account.

LDM source:

	
- [*parent]->Bank_Account->Bank_Branch->Bank.Name

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

or

	
- Bank[.Code=bankCode].Name

- where bankCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankCode

or

	
- Bank_Branch[.Synchronization_Code=bankBranchSyncCode]->Bank.Name

- where bankBranchSyncCode is taken from GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


Localization code:
GEN_BankName

## 📊 Appears In (1 diagrams)

- Custom: Show bank account - VN
