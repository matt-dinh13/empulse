---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client/Safe guaranty"
domain: "Analysis Model"
element_id: 1736468
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ SMS as preferred communication channel

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client/Safe guaranty

## 📝 Notes

Indication, whether SMS is client's preferred communication channel or not.

Visible only if Safe guaranty is checked (TRUE value).

Not editable - read only.

LDM source:

	
- GetCustomerDataResponse.data.communicationChannels.PREF_COMMUNICATION[.channelType='SMS'].activeYn when present within the response
otherwise


Localization code:
CLI_PreferredSms

## 📊 Appears In (1 diagrams)

- Custom: Safe guaranty
