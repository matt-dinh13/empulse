---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755756
diagrams: 1
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 UpdateMode

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

{ADD CLM-2727 /}
Mode of data update. The system updates all data from the request regardless the fact whether data has been changed or not. Internal IDs are ignored. Default value is DIFFERENCE.

## 🔗 Connections (2)

- ← Usage: [[CreateCustomerDataRequest]]
- ← Usage: [[UpdateCustomerDataRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Customer Data - Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| FULL |  |  |
| DIFFERENCE |  |  |
| ATTRIBUTE |  |  |
| SYNCHRONIZATION |  |  |
