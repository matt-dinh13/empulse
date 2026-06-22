---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Change language"
domain: "Modules"
element_id: 1800515
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Active salesroom

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Change language

## 📝 Notes

System offers all active salesrooms on whom is user assigned (exists relation between USER and SALESROOM where SALESROOM.STATUS = ‘Active’)

If sales agent code is displayed, then only active salesrooms of given sales agent are offered.
(USER_SETTING where USER_SETTING.USER_SETTING_ITEM = „ACTIVE_SALESROOM“)

Parameterization for VN . System displays list of active salesroom with salesroom code. First part will be salesroom code (SALESROOM.CODE) and second part salesroom name (SALESROOM.NAME). Parts are separately with "-". (for example "012345 - Salesroom name")

{ADD PCG-157}
All listed salesrooms are alphabetically ordered and can be filtered by added whisperer (case insensitive).
{/ADD}

Mandatory if sales agent code was entered, else optional

Localization code: GEN_ActiveSalesroom

## 📊 Appears In (1 diagrams)

- Custom: Change language - user interface
