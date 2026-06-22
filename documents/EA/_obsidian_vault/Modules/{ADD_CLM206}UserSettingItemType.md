---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799216
diagrams: 1
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 {ADD_CLM206}UserSettingItemType

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

A list of available setting items for user

## 🔗 Connections (1)

- ← Usage: [[{ADD_CLM206}UserSetting]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ActiveYN | Boolean |  |
| Code | Varchar2 (30) |  |
| Value | Varchar2 (255) |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
