---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1750955
diagrams: 3
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Client Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Address of the client. Can be of type Permanent or Contact.

## 🔗 Connections (6)

- → Dependency: [[CustomerAddress]]
- ← Aggregation: [[Address]]
- → Dependency: [[Client Address Role]]
- ← Aggregation: [[Address (Boundary 1595608)]]
- → Dependency: [[CustomerAddress]]
- → Aggregation: [[{MOD}Client Snapshot]]

## 📊 Appears In (3 diagrams)

- Logical: Address - CORE
- Logical: Client management
- Logical: Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Is Utility Bill Address | Boolean | false |
| Registered date | Month and Year |  |
| Role | Client Address Role |  |
