---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH"
domain: "Analysis Model"
element_id: 1873804
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account holder name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH

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

## 🔗 Connections (2)

- → Dependency: [[Account holder name (Action 1351111)]]
- → Dependency: [[DDM Account holder name]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank account - PH
