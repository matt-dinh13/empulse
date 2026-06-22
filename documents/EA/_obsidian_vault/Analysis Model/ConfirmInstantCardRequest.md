---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163797
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ConfirmInstantCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 🔗 Connections (2)

- → Dependency: [[CardDeliveryType]]
- ← Dependency «use»: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | PaymentCardId |  |
| holderCuid | Cuid |  |
| account | Card: AccountDto |  |
| serviceCode | ServiceCode |  |
| approvedCreditLimit | ApprovedCreditLimit |  |
| posDeliveryAddress | PosDeliveryAddressDto |  |
| renewalCardTypeId | CardType |  |
| cardDeliveryType | CardDeliveryType |  |
