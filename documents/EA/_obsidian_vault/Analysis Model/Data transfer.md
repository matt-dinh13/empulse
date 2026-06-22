---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure"
domain: "Analysis Model"
element_id: 1163481
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Data transfer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure

## 📝 Notes

Represents one "batch" of data which was imported to BSL / exported from BSL or any communication with external systems via web-services.

## 🔗 Connections (4)

- ← Aggregation: [[Data transfer item]]
- → Dependency: [[Data transfer status type]]
- → Dependency: [[Data exchange]]
- ← Association: [[File descriptor]]

## 📊 Appears In (1 diagrams)

- Logical: Data Import Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Data exchange code | Data exchange |  |
| Status | Data transfer status type |  |
| Response | Clob |  |
| Request | Clob |  |
| Error code | Text (30) |  |
| Error message | Text (2000) |  |
| Error line | Number (18,0) |  |
| Job instance ID | Number (19) |  |
