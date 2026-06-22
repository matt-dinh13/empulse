---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163779
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAllowedCardOperationsForUserResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

Response containing list of privileges with associated true/false flag whether privilege is allowed

## 🔗 Connections (3)

- → Usage: [[UserPrivilegeToBlockUnblockCardWithReasonDto (Class 1481404)]]
- → Usage: [[UserPrivilegeToBlockUnblockCardWithReasonDto (Class 1481404)]]
- ← Usage: [[CardManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: Card management - Interface diagram
- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| markCardLost | boolean |  |
| markCardStolen | boolean |  |
| blockCardWithBlockReasons | UserPrivilegeToBlockUnblockCardWithReasonDto |  |
| unblockCardWithBlockReasons | UserPrivilegeToBlockUnblockCardWithReasonDto |  |
