---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface"
domain: "Analysis Model"
element_id: 1878058
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Account type

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/User interface

## 📝 Notes

Type of account (credit type, debit type). 
Source: account.accountType

	
- If account.accountType = "CURRENT_ACCOUNT", display Debit account
	
- If account.accountType = "REVOLVING_ACCOUNT", display Credit account


	
- If account.accountType = 'FLEXI_LIMIT_ACCOUNT', display value of localized code = ACC_FlexiAccount (e.g. Flexi-loan account)
	
- {ADD CSI-709}If account.accountType = 'PAY_LATER', display value of localized code = ACC_PayLaterAccount (e.g. Pay Later account){/ADD}
	
- {ADD CSI-661}If account.accountType = 'VIRTUAL_LIMIT', display value of localized code = ACC_VirtualLimitAccount (e.g. Virtual Limit account){/ADD}


Localization code: ACC_Type

## 📊 Appears In (1 diagrams)

- Custom: Show account detail
