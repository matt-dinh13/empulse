---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799214
diagrams: 2
connections: 7
tags:
  - enumeration
  - modules
---

# 📝 Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

List of possible ticket types 

(CCN, CNN_CIACS, Cancellation in active status, CONTRACT_MNGMT_FLOW, OPEN, 1, NONE).

## 🔗 Connections (7)

- ← Association: [[{ADD_CLM206}MistakeRule]]
- → Association: [[Status (Enumeration 1799211)]]
- ← Association: [[Ticket (Class 1799206)]]
- → Association: [[Category (Enumeration 1799203)]]
- ← Dependency: [[StatusTransition]]
- → Association: [[Flow]]
- → Association: [[Priority]]

## 📊 Appears In (2 diagrams)

- Logical: Part 1
- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Varchar2 (30) Unique |  |
| Value | Varchar2 (255) |  |
| TypeCount | Int (6) | 0 |
| ActiveYN | Boolean |  |
| CreationDate | DateTime |  |
| VisibleYN | Boolean |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| Category | Varchar2 (30) |  |
| InitialStatus | Varchar2 (20) |  |
| Priority | Varchar2 (30) |  |
| {ADD_v03}Version | Int (18) |  |
| Flow | Varchar2 (30) |  |
