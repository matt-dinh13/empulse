---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS"
domain: "Analysis Model"
element_id: 1249594
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 UserPrivilegeToBlockUnblockCardWithReasonDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS

## 📝 Notes

Specifies whether operator has privilege to block/unblock card with given block type

## 🔗 Connections (2)

- ← Dependency «use»: [[GetAllowedCardBlockOperationsForUserResponse]]
- ← Dependency: [[GetAllowedCardBlockOperationsForUserResponse]]

## 📊 Appears In (1 diagrams)

- Logical: CardBlockWS.GetAllowedCardBlockOperationsForUser

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| allowed | boolean |  |
| cardBlockTypeId | string |  |
| permanent | boolean |  |
