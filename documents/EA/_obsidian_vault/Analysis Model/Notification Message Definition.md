---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model"
domain: "Analysis Model"
element_id: 1371286
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Notification Message Definition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model

## 📝 Notes

Entity of SMS notification message to inform client about receiving of incoming payment, change on contract, etc.

For more information on message definition see: https://docs.cz.infra/mss/doc/MessagingGuide.html

## 🔗 Connections (5)

- → Association: [[SystemEvent]]
- → Association: [[Notification Message Template]]
- → Association: [[Notification Message Definition Type]]
- → Dependency: [[Notification Type]]
- → Dependency: [[Variant Type]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | String |  |
| Description | String |  |
| NotificationType | String |  |
| Variant | VariantType |  |
| ActiveYN | Boolean |  |
