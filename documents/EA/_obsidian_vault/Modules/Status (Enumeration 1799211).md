---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799211
diagrams: 2
connections: 5
tags:
  - enumeration
  - modules
---

# 📝 Status

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Defines possible ticket statuses

(e.g. new, open, closed)

## 🔗 Connections (5)

- ← Association: [[Type (Enumeration 1799214)]]
- ← Association: [[Ticket (Class 1799206)]]
- ← Association: [[StatusTransition]]
- ← Dependency: [[Rule]]
- ← Dependency: [[Rule]]

## 📊 Appears In (2 diagrams)

- Logical: Part 1
- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ActiveYN | Boolean |  |
| Code | Varchar2 (30) Unique |  |
| Value | Varchar2 (255) |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
