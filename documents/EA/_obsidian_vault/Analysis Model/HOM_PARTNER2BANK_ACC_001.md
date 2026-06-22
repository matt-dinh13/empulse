---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162925
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PARTNER2BANK_ACC_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Contains information about assignment of bank accounts to a partner

## 🔗 Connections (1)

- → Aggregation: [[HOM_PARTNER_001]]

## 📊 Appears In (1 diagrams)

- Logical: Partner (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bank account ID | number |  |
| partner ID | number |  |
| valid from | date |  |
| valid to | date |  |
