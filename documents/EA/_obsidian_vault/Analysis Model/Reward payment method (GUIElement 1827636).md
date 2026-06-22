---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change reward payment channel (modal window)"
domain: "Analysis Model"
element_id: 1827636
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reward payment method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change reward payment channel (modal window)

## 📝 Notes

Type of the reward payment method.

Not editable - read only. Enumeration values retrieved from Reward payment method type.

LDM source:

	
- RewardPaymentMethod got according to the rule Mapping of selected reward payment method to CEL reward payment channel attributes with following parameters on the input:
   - PaymentChannelType = GetPaymentChannelResponse.paymentChannels[.purpose='RW'].type
   - PaymentChannelSourceType = GetPaymentChannelResponse.paymentChannels[.purpose='RW'].sourceType


Localization code:
APP_RewardPaymentMethod

## 🔗 Connections (2)

- → Dependency: [[Reward payment method type]]
- → Dependency: [[Mapping of selected reward payment method to CEL reward payment channel attributes]]

## 📊 Appears In (1 diagrams)

- Custom: Change reward payment channel
