---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1595595
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Partner Cobrand Group

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

Assignment of Tariff Group to Partner.

## 🔗 Connections (4)

- ← Dependency: [[Cobrand Group Type]]
- ← Dependency: [[Cobrand Group Type]]
- → Aggregation: [[{MOD}Partner]]
- → Dependency: [[Cobrand group]]

## 📊 Appears In (3 diagrams)

- Logical: Mapping Transaction to Tariff Item Group
- Logical: Partner
- Logical: SNM Partner Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | DateTime |  |
| validTo | DateTime |  |
| Cobrand group | code |  |
