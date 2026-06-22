---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163806
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ReserveCardRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

Validates that the card PAN is in CREATED state and reserves the card for given account.

## 🔗 Connections (1)

- ← Dependency «use»: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | PaymentCardId |  |
| reservationCode | ReservationCode |  |
| embossName | string |  |
| cardHolderName | CardHolderName |  |
| renewalCardType | CardTypeDto |  |
