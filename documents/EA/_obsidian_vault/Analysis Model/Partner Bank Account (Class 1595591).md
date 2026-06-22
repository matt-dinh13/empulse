---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model"
domain: "Analysis Model"
element_id: 1595591
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Partner Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model

## 🔗 Connections (4)

- → Aggregation: [[{MOD}Partner]]
- → Association: [[Bank Account (Class 1627830)]]
- → Association: [[Sales Bank Account Purpose]]
- → Association: [[Bank Account]]

## 📊 Appears In (2 diagrams)

- Logical: Partner
- Logical: SNM Partner Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | DateTime |  |
| validTo | DateTime |  |
| forPayments | boolean |  |
