---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799220
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 UserSetting

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Defines particular user settings in system.

## 🔗 Connections (3)

- → Aggregation: [[User (Class 1799218)]]
- → Usage: [[UserSettingItemType]]
- → Aggregation: [[User (Class 1798521)]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ItemType | UserSettingItem |  |
| Value | string |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
