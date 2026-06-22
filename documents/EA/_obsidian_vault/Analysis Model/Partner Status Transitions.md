---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model"
domain: "Analysis Model"
element_id: 1595602
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Partner Status Transitions

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model

## 📝 Notes

Contains all information about changes of partner's status.

## 🔗 Connections (4)

- → Dependency: [[SN Entity Status]]
- → Association: [[Partner Status Transitions]]
- ← Association: [[Partner Status Transitions]]
- ← Association: [[{MOD}Partner]]

## 📊 Appears In (1 diagrams)

- Logical: Partner

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created by | User |  |
| Creation Date | DateTime |  |
| Reason | Text |  |
| Status | SN Entity Status |  |
