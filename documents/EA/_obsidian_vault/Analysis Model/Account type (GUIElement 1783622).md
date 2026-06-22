---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN"
domain: "Analysis Model"
element_id: 1783622
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/VN

## 📝 Notes

Type of the bank account.

Other:

	
- Enumeration values are taken from the Account Type (ordered by .Name ASC).


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account.Type
or
GetPaymentChannelResponse.paymentChannels.bankAccount.accountType
or
GetDDMResponse.ddmData.bankAccountData.accountType
	
- //LDM for value saving
[*parent]->Bank_Account.Type
or
CreatePaymentChannelDraftRequest.bankAccount.accountType / 
UpdatePaymentChannelOrDraftRequest.bankAccount.accountType
or
CreateDDMDraftRequest.bankAccountData.accountType / 
UpdateDDMOrDraftRequest.bankAccountData.accountType


- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).

Localization code:
ACC_Type

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/update bank account - VN
