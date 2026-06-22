---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820272
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank name

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

Bank, which is maintaining the account.

Other:

	
- Empty by default (when no value is available on the respective bank account yet).
	
- Enumeration values are taken from the Bank.Name (ordered by .Name ASC).


LDM:

	
- //LDM source for field pre-filling
[*parent]->Bank_Account->Bank_Branch->Bank.Name

- where [*parent] represents the respective superior entity given by the particular context (e.g. salesroom, partner, etc.).
or
Bank[.Code=bankCode].Name

- where bankCode is taken from GetPaymentChannelResponse.paymentChannels.bankAccount.bankCode
or
Bank_Branch[.Synchronization_Code=bankBranchSyncCode]->Bank.Name

- where bankBranchSyncCode is taken from GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode


	
- //LDM for value saving
Note: Selected value is not actually saved; it is used as a filtering input for other form fields only.


Localization code:
GEN_BankName

## 📊 Appears In (1 diagrams)

- Custom: General bank account on Application detail
