---
type: Class
stereotype: "grid"
package: ""
domain: "_Uncategorized"
element_id: 1732665
diagrams: 0
connections: 0
tags:
  - class
  - _uncategorized
---

# 🔷 Communication History

> **Type**: Class · **Stereotype**: «grid»
> **Package**: N/A

## 📝 Notes

Displays history of communication with client.
LDM: CHResponse.CommunicationRecord (referenced as CHRecord)
Each returned CHRecord is displayed in separate panel.
Default order by: CHRecord.dateCreated desc, CHRecord.MUID.communicationID desc
No paging, ordering by column headers available

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created when | datetime |  |
| Created by | string |  |
| Channel | string |  |
| Type | string |  |
| Subtype | string |  |
| Status | string |  |
| Result | string |  |
| ResultDetail | string |  |
| Note | text |  |
| System | string |  |
