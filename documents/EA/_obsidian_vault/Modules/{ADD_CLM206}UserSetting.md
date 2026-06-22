---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799217
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD_CLM206}UserSetting

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Defines particular user settings in system.

## 🔗 Connections (2)

- → Aggregation: [[User (Class 1799218)]]
- → Usage: [[{ADD_CLM206}UserSettingItemType]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ItemType | Varchar2 (30) |  |
| Value | Varchar2 (255) |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| Id | Int (18) |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| Version | Int (18) |  |
| UserId | Int(18) |  |
