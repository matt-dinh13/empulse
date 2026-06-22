---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783619
diagrams: 2
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

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

## 🔗 Connections (3)

- → Dependency: [[{ADD}Bank account]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Account number - VN]]

## 📊 Appears In (2 diagrams)

- Custom: Bank account in AF - VN
- Custom: Create/update bank account - VN
