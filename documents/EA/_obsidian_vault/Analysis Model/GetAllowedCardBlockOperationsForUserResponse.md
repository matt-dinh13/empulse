---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS"
domain: "Analysis Model"
element_id: 1376949
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAllowedCardBlockOperationsForUserResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS

## 📝 Notes

Response containing list of privileges with associated true/false flag whether privilege is allowed

## 🔗 Connections (3)

- ← Dependency «use»: [[CardBlockWS (Interface 1243619)]]
- → Dependency «use»: [[UserPrivilegeToBlockUnblockCardWithReasonDto]]
- → Dependency: [[UserPrivilegeToBlockUnblockCardWithReasonDto]]

## 📊 Appears In (1 diagrams)

- Logical: CardBlockWS.GetAllowedCardBlockOperationsForUser

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| markCardLost | boolean |  |
| markCardStolen | boolean |  |
| blockCardWithBlockReasons | UserPrivilegeToBlockUnblockCardWithReasonDto |  |
| unblockCardWithBlockReasons | UserPrivilegeToBlockUnblockCardWithReasonDto |  |
