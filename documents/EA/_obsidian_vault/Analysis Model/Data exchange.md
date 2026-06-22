---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure"
domain: "Analysis Model"
element_id: 1163484
diagrams: 1
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 Data exchange

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure

## 📝 Notes

Defines available types of data transfers (reasons for data transfers and their parameters).

## 🔗 Connections (2)

- → Dependency: [[Data exchange direction type]]
- ← Dependency: [[Data transfer]]

## 📊 Appears In (1 diagrams)

- Logical: Data Import Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text (255) |  |
| Direction | Data exchange direction type |  |
| Processor name | Text (255) |  |
| Data definition name | Text (255) |  |
| Header format | Text (255) |  |
| Maximal size | Number (18,0) |  |
