---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1747196
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account holder name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

Name of the bank account's holder.

LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account.Holder_Name
or
GetPaymentChannelResponse.paymentChannels.bankAccount.holderName
or
GetDDMResponse.ddmData.bankAccountData.accountHolderName


	
- //LDM for value saving
[*parent]->Bank_Account.Holder_Name
or
CreatePaymentChannelDraftRequest.bankAccount.holderName / 
UpdatePaymentChannelOrDraftRequest.bankAccount.holderName
or
CreateDDMDraftRequest.bankAccountData.accountHolderName / 
UpdateDDMOrDraftRequest.bankAccountData.accountHolderName


- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

Localization code:
ACC_HolderName

## 🔗 Connections (1)

- → Dependency: [[Account holder name (Action 1245069)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank acount - ID
