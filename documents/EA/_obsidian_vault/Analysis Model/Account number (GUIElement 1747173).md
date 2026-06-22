---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ"
domain: "Analysis Model"
element_id: 1747173
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/KZ

## 📝 Notes

Number of the bank account.

LDM source:

	
- [*parent]->Bank_Account.Account_Number

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

or

	
- GetPaymentChannelResponse.paymentChannels.bankAccount.accountNumber

or

	
- GetDDMResponse.ddmData.bankAccountData.accountNumber


Localization code:
ACC_Number

## 📊 Appears In (1 diagrams)

- Custom: Show bank account - KZ
