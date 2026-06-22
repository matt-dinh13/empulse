---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses"
domain: "Modules"
element_id: 1864820
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}Queue

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses

## 📝 Notes

Defines possible queue priorities (e.g. critical, low, none).

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Ticket (Class 1864827)]]
- → Dependency: [[{ADD}QueueTickets]]

## 📊 Appears In (1 diagrams)

- Logical: ResponsesV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| value | string |  |
| priority | int |  |
| tickets | QueueTickets |  |
