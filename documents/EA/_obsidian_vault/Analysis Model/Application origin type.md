---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813824
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Application origin type

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Type of the channel, via which the application was originated.

Visible only if parameter (parameters.properties) displayCreatedExternally = TRUE.

LDM source:
In case the application was created externally using the provided API (i.e. Contract.Created_Externally = TRUE), message CON_CreatedViaAPI is displayed as the element's value. Otherwise message CON_CreatedViaUI is displayed instead.

Localization code:
APP_OriginType

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
