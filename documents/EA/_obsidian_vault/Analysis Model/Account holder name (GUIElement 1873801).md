---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH"
domain: "Analysis Model"
element_id: 1873801
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account holder name

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH

## 📝 Notes

Name of the bank account's holder.

LDM source:

	
- [*parent]->Bank_Account.Holder_Name

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

or

	
- GetPaymentChannelResponse.paymentChannels.bankAccount.holderName

or

	
- GetDDMResponse.ddmData.bankAccountData.accountHolderName


Localization code:
ACC_HolderName

## 📊 Appears In (1 diagrams)

- Custom: Show bank account - PH
