---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799202
diagrams: 2
connections: 6
tags:
  - enumeration
  - modules
---

# 📝 Department

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

List of all departments which can work with tickets

(BOP, BO - Payments)

## 🔗 Connections (6)

- → Association: [[Role (Enumeration 1799219)]]
- ← Association: [[Ticket (Class 1799206)]]
- ← Association: [[{ADD_CLM206}MistakeRule]]
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
| Description | Varchar2 (255) |  |
| {ADD_v03}Version | Int (18) |  |
| {ADD_CLM316}FrontOfficeFlag | Boolean |  |
