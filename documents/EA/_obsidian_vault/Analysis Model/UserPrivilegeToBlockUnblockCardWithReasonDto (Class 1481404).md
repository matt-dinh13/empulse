---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Messages"
domain: "Analysis Model"
element_id: 1481404
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 UserPrivilegeToBlockUnblockCardWithReasonDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Messages

## 📝 Notes

Specifies whether operator has privilege to block/unblock card with given block type

## 🔗 Connections (2)

- ← Usage: [[GetAllowedCardOperationsForUserResponse]]
- ← Usage: [[GetAllowedCardOperationsForUserResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| allowed | boolean |  |
| cardBlockTypeId | string |  |
