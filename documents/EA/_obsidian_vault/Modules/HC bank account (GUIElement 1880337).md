---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880337
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ HC bank account

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

HC’s bank account number to which payment was placed
(INCOMING_PAYMENT.BANK_ACCOUNT)

Composed from account number and bank branch code, separated by slash(/).

{ADD MODULARIZATION}
LDM: Incoming Payment->Hc Bank Account
{/ADD}

{DEL MODULARIZATION}
Only HC's bank account are listed.
(BANK_ACCOUNT where BANK_ACCOUNT.HOLDER_TYPE = HC)
Displayed as BANK_ACCOUNT.ACCOUNT_NUMBER + ‘/’ + BANK_ACCOUNT.BANK_BRANCH.BRANCH_CODE
{/DEL}
Mandatory: No
Editable: Yes
Localization code: PAY_HcAcc

## 📊 Appears In (1 diagrams)

- Custom: Create incoming payment - UI
