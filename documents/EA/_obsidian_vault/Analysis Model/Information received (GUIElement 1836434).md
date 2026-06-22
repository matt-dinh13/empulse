---
type: GUIElement
stereotype: "checkbox"
package: "HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/Product"
domain: "Analysis Model"
element_id: 1836434
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Information received

> **Type**: GUIElement · **Stereotype**: «checkbox»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/Product

## 📝 Notes

Visible only if the user has the UC01_061 access right granted.

Disabled and unchecked by default. 
Enabled once the information is successfully sent (i.e. use case 01.061 Send information to client by sms to process application form is called and performed with no error).

Once checked, Send information to client button is disabled. If unchecked again, element is disabled and the Send information to client button is enabled.

Localization code:
LOR_SMSInformationReceived

## 🔗 Connections (1)

- ← Generalization: [[Information received (GUIElement 1836429)]]

## 📊 Appears In (1 diagrams)

- Custom: Product
