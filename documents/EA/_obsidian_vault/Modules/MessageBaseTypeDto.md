---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model/JMS messages"
domain: "Modules"
element_id: 1266618
diagrams: 6
connections: 7
tags:
  - class
  - modules
---

# 🔷 MessageBaseTypeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model/JMS messages

## 📝 Notes

CBS message base.

## 🔗 Connections (7)

- ← Generalization «XSDextension»: [[AccountSystemMessageDto]]
- ← Generalization «XSDextension»: [[PaidInstallmentMessageDto]]
- ← Generalization «XSDextension»: [[InstalmentMessageDto]]
- ← Generalization «XSDextension»: [[AccruedInterestMessageDto]]
- ← Generalization «XSDextension»: [[TransactionMessageDto]]
- ← Generalization «XSDextension»: [[TransactionMessageDto (Class 1347890)]]
- ← Generalization: [[{ADD}WriteOffNotificationDto]]

## 📊 Appears In (6 diagrams)

- Logical: COMMON for consumed JMS messages from CaBus
- Logical: Generated messages - WriteOffNotification
- Logical: REL Installment schedule - Communication model
- Logical: REL Payment Pairing - Communication Model
- Logical: System Messages - Communication model
- Logical: System Messages - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageId | long |  |
| timestamp | dateTime |  |
