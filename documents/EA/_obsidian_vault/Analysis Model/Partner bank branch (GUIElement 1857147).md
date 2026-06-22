---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857147
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner bank branch

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Name of the partner's branch (salesroom), where the loan money shall be disbursed to.

LDM source:

	
- Salesroom.name retrieved according to the rule Get salesroom data with salesroomCode on the input 
- where salesroomCode is taken from GetPaymentChannelResponse.paymentChannels[.purpose='DI' and .type='PBA'].salesroomCode


Localization code:
PAR_PartnerBranch

## 🔗 Connections (1)

- → Dependency: [[Get salesroom data]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
