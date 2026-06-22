---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820270
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

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

## 🔗 Connections (1)

- → Dependency: [[Account number - VN]]

## 📊 Appears In (1 diagrams)

- Custom: General bank account on Application detail
