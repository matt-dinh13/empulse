---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Logical Data Model"
domain: "Analysis Model"
element_id: 1556405
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Salesroom Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Logical Data Model

## 🔗 Connections (4)

- → Association: [[Sales Bank Account Purpose]]
- → Association: [[Bank Account (Class 1627830)]]
- → Aggregation: [[Salesroom (Class 1556394)]]
- → Association: [[Bank Account]]

## 📊 Appears In (2 diagrams)

- Logical: Salesroom
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | DateTime |  |
| validTo | DateTime |  |
| {ADD}forPayments | boolean |  |
