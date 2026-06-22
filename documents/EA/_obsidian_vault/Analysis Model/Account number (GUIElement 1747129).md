---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN"
domain: "Analysis Model"
element_id: 1747129
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN

## 📝 Notes

Number of the bank account.

LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account.Account_Number
or
GetPaymentChannelResponse.paymentChannels.bankAccount.accountNumber
or
GetDDMResponse.ddmData.bankAccountData.accountNumber


	
- //LDM for value saving
[*parent]->Bank_Account.Account_Number
or
CreatePaymentChannelDraftRequest.bankAccount.accountNumber / 
UpdatePaymentChannelOrDraftRequest.bankAccount.accountNumber
or
CreateDDMDraftRequest.bankAccountData.accountNumber / 
UpdateDDMOrDraftRequest.bankAccountData.accountNumber


- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

Localization code:
ACC_Number

## 🔗 Connections (2)

- → Dependency: [[Numeric]]
- → Dependency: [[Account number validation]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank acount - IN
