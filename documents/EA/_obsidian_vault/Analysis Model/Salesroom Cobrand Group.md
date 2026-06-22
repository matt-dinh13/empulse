---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1556398
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Salesroom Cobrand Group

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

Assignment of Tariff Group to Salesroom.

## 🔗 Connections (4)

- ← Dependency: [[Cobrand Group Type]]
- ← Dependency: [[Cobrand Group Type]]
- → Dependency: [[Cobrand group]]
- → Aggregation: [[Salesroom (Class 1556394)]]

## 📊 Appears In (3 diagrams)

- Logical: Mapping Transaction to Tariff Item Group
- Logical: Salesroom
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | DateTime |  |
| validTo | DateTime |  |
| Cobrand group | code |  |
