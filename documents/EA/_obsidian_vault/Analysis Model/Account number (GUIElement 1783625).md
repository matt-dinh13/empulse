---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783625
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

## 📝 Notes

Number of the bank account.

LDM source:

	
- [*parent]->Bank_Account.Account_Number

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

or

	
- GetPaymentChannelResponse.paymentChannels.bankAccount.accountNumber

or

	
- GetDDMResponse.ddmData.bankAccountData.accountNumber


Note: Individual characters are visually grouped into the blocks of four separated by an empty space (e.g. '1234 1234 1234') - such grouping is controlled by the parameter (parameters.properties) groupAccountNumberChars.

Localization code:
ACC_Number

## 📊 Appears In (1 diagrams)

- Custom: Show bank account - VN
