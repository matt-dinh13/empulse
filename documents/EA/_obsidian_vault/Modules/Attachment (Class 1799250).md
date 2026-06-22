---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799250
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Attachment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Entity that keeps information about and reference to files attached to the ticket. Such files are uploaded to the ticket and are accompanied by a file name and possibly a user comment.

## 🔗 Connections (1)

- → Aggregation: [[Ticket (Class 1799223)]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Comment | String |  |
| ExternalId | string |  |
| FileName | string |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
