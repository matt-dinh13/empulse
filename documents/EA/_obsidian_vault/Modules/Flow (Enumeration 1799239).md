---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799239
diagrams: 1
connections: 2
tags:
  - enumeration
  - modules
---

# 📝 Flow

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

Country configurable enumeration of all TicketingRule definitions (i.e. GENERAL_FLOW, MISTAKE, ...). These flows are further used in the behaviour logic of the TCK application.

## 🔗 Connections (2)

- ← Association: [[TicketType]]
- ← Association: [[Rule (Class 1799225)]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| ActiveYN | boolean |  |
