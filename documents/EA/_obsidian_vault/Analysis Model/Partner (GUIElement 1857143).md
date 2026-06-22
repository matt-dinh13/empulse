---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857143
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner 

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Name of the partner, whom the loan money shall be disbursed to.

LDM source:

	
- Partner.name retrieved according to the rule Get partner data for selected salesroom with salesroomCode on the input

- where salesroomCode is taken from GetPaymentChannelResponse.paymentChannels[.purpose='DI' and .type='PBA'].salesroomCode


Localization code:
PAR_Partner

## 🔗 Connections (1)

- → Dependency: [[Get partner data for selected salesroom]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
