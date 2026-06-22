---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/User Interface "
domain: "Analysis Model"
element_id: 1716251
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Active salesroom

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/User Interface 

## 📝 Notes

System offers all active salesrooms on whom is user assigned - the HSIS module is called for getting this information

If sales agent code is displayed, then only active salesrooms of given sales agent are offered.
(USER_SETTING where USER_SETTING.USER_SETTING_ITEM = „ACTIVE_SALESROOM“)

Parameterization for VN . System displays list of active salesroom with salesroom code. First part will be salesroom code (SALESROOM.CODE) and second part salesroom name (SALESROOM.NAME). Parts are separately with "-". (for example "012345 - Salesroom name")

All listed salesrooms are alphabetically ordered and can be filtered by added whisperer (case insensitive).

Mandatory if sales agent code was entered, else optional

Localization code: GEN_ActiveSalesroom

## 📊 Appears In (1 diagrams)

- Custom: User setting
