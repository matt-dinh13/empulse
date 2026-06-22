---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/Logical Data Model"
domain: "Analysis Model"
element_id: 803347
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 User Inbox

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/Logical Data Model

## 📝 Notes

This entity is used for storing messages from system to Client

## 🔗 Connections (2)

- → Association: [[User (Class 1572279)]]
- → Association: [[User Inbox Attachment]]

## 📊 Appears In (1 diagrams)

- Logical: Common - User

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Link | URL |  |
| Message Parameters | Text |  |
| Message text  | Text |  |
| Read flag | Boolean |  |
