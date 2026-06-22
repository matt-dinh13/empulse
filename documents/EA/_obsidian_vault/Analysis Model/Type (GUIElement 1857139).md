---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857139
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Type

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Type of a preferred reward payment method applicable for respective CEL reward channel.

LDM source:

	
- RewardPaymentMethod got according to the rule Mapping of selected reward payment method to CEL reward payment channel attributes with following parameters on the input:
   - PaymentChannelType = GetPaymentChannelResponse.paymentChannels[.purpose='RW'].type
   - PaymentChannelSourceType = GetPaymentChannelResponse.paymentChannels[.purpose='RW'].sourceType


Localization code:
CON_CELRewardChannelType

## 🔗 Connections (1)

- → Dependency: [[Mapping of selected reward payment method to CEL reward payment channel attributes]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
