---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN"
domain: "Analysis Model"
element_id: 1747124
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/IN

## 📝 Notes

Type of the bank account.

Other:

	
- Enumeration values are taken from the Account Type (ordered by .Name ASC).
	
- If the Bank_Account.Type is null when pre-filling the field and the superior panel is used for updating DDM, then Saving account ('SA') value is preset.


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

## 📊 Appears In (1 diagrams)

- Custom: Create/Update bank acount - IN
