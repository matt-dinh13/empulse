---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH"
domain: "Analysis Model"
element_id: 1873800
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/PH

## 📝 Notes

Type of the bank account.

Other:

	
- Empty by default (when no value is available on the respective bank account yet).
	
- Enumeration values are taken from the Account Type and limited only to the following values (ordered in this particular order):
   - Saving account ('SA')
   - Current account ('CA')


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

## 🔗 Connections (2)

- → Dependency: [[Account type]]
- → Dependency: [[Account Type]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank account - PH
