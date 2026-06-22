---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799198
diagrams: 1
connections: 2
tags:
  - enumeration
  - modules
---

# 📝 Flow

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

List of TicketingRule definitions (names)
(GENERAL_FLOW, MISTAKE, .... )

## 🔗 Connections (2)

- ← Association: [[Type (Enumeration 1799214)]]
- ← Association: [[Rule]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Varchar2 (30) Unique |  |
| CreationDate | Datetime |  |
| Value | Varchar2 (120) |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| ActiveYN | boolean |  |
| {DELv03}Id{/DEL_v03} | Int (18) Unique |  |
| UpdateDate | Datetime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
