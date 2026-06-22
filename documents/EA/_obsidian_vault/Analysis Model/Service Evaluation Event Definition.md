---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Logical Data Model"
domain: "Analysis Model"
element_id: 1868555
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Service Evaluation Event Definition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Logical Data Model

## 📝 Notes

The entity stores definitions for evaluation of services of the respective Service Type on the defined event.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Check Moment Type]]
- → Aggregation: [[Service Type (Class 1880808)]]

## 📊 Appears In (1 diagrams)

- Logical: Service Processing Setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Event Type | Check Moment Type |  |
| Evaluation Priority | int |  |
