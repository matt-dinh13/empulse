---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1747189
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ BI code

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

BI code (MICR) of the bank branch, which is maintaining the account.

LDM source:

	
- [*parent]->Bank_Account->Bank_Branch.MICR

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

or

	
- Bank_Branch[.Synchronization_Code=bankBranchSyncCode].MICR

- where bankBranchSyncCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankBranchSyncCode / GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


Localization code:
GEN_MICR

## 📊 Appears In (1 diagrams)

- Custom: Show bank account - ID
