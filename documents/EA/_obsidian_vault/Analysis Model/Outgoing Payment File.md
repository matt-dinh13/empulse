---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model"
domain: "Analysis Model"
element_id: 1481023
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Outgoing Payment File

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model

## 📝 Notes

Structure of the file containing payment orders of outgoing payments

## 🔗 Connections (2)

- → Association: [[Bank Account (Class 1627830)]]
- ← Aggregation: [[Outgoing Payment Order]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payment file
- Logical: Outgoing Payment Orders

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| File Printout | File |  |
| Creation Date | DateTime |  |
| File | File |  |
| Name | Text |  |
| {ADD}HC bank account code | Text(20) |  |
