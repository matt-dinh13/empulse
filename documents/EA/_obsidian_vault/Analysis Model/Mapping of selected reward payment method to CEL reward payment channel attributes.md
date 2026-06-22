---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827653
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping of selected reward payment method to CEL reward payment channel attributes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the mapping of selected reward payment method to CEL reward payment channel attributes (for saving the payment channel data) and vice versa (for getting the selected reward payment method).

Input/output:
- RewardPaymentMethod = selected reward payment method (preferred by the client)
or
- PaymentChannelType = type of the CEL reward payment channel
- PaymentChannelSourceType = type of the CEL reward payment channel's source

Steps:
Following mapping between the respective input and output values is used:

	
- RewardPaymentMethod = 'CURRENT_ACCOUNT'
is mapped to/from:
PaymentChannelType = 'GBA' and PaymentChannelSourceType = 'OTHER_BANK'
.
	
- RewardPaymentMethod = 'DEBIT_CARD'
is mapped to/from:
PaymentChannelType = 'GBA' and PaymentChannelSourceType = 'DEBIT_CARD'
.
	
- RewardPaymentMethod = 'EXTRA_LOAN_REPAYMENT'
is mapped to/from:
PaymentChannelType = 'OC'

## 🔗 Connections (4)

- ← Dependency: [[Reward payment method (GUIElement 1827636)]]
- ← Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- ← Dependency: [[Reward payment method (GUIElement 1827895)]]
- ← Dependency: [[Type (GUIElement 1857139)]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
