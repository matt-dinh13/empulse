---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799203
diagrams: 2
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 Category

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

List of possible ticket categories. 

(CCN, Contract cancellation; CM, Contract management).

## 🔗 Connections (1)

- ← Association: [[Type (Enumeration 1799214)]]

## 📊 Appears In (2 diagrams)

- Logical: Part 1
- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Varchar2 (60) Unique |  |
| Value | Varchar2 (255) |  |
| VisibleYN | Boolean |  |
| ActiveYN | Boolean |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
