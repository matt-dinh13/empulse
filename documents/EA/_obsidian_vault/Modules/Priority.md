---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799195
diagrams: 2
connections: 3
tags:
  - enumeration
  - modules
---

# 📝 Priority

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Defines possible ticket priorities (e.g. critical, low, none). 

Note: It is used especially at Record mistakes.

(CRITICAL, Critical; NONE, None; LOW, Low)

## 🔗 Connections (3)

- ← Association: [[Type (Enumeration 1799214)]]
- ← Association: [[Ticket (Class 1799206)]]
- ← Association: [[{ADD_CLM206}MistakeRule]]

## 📊 Appears In (2 diagrams)

- Logical: Part 1
- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Varchar2 (30) Unique |  |
| Value | Varchar2 (255) |  |
| ActiveYN | boolean |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
