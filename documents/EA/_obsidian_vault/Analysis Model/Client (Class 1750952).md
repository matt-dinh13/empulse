---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1750952
diagrams: 5
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Client

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

Every actual information about Client are in CIF. In HOSEL we have only CUID atribute.

## 🔗 Connections (6)

- ← Dependency: [[Extended Property Value]]
- ← Association: [[Communication Event]]
- → Dependency: [[Extended Property Group]]
- ← Association: [[{MOD}Client Snapshot]]
- ← Association: [[Debt Statistics]]
- ← Association: [[Deal (Class 1879557)]]

## 📊 Appears In (5 diagrams)

- Logical: Client management
- Logical: Common - Extended Properties
- Logical: Communication
- Logical: Contract debt tracking
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | Number (18,0) |  |
