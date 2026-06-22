---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID"
domain: "Analysis Model"
element_id: 1747201
diagrams: 2
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/User interface/ID

## 📝 Notes

Number of the bank account.

Other:

	
- Enabled (editable) only if the Bank name is filled in.
	
- User can input only digits - maximum number of digits is limited as follows:
- for DDM account number: by Bank -> DD account number validation (Maximal length); if not defined then by Bank -> General account number validation (Maximal length); if not defined then 30 digits
- for other than DDM account number: by Bank -> General account number validation (Maximal length); if not defined then by Bank -> General account number validation (Maximal length); if not defined then 30 digits


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

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Account number]]

## 📊 Appears In (2 diagrams)

- Custom: Create/Update bank account for DD - ID
- Custom: Create/Update bank account for disbursement - ID
