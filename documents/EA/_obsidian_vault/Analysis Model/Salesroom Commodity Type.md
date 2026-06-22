---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Logical Data Model"
domain: "Analysis Model"
element_id: 1556395
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Salesroom Commodity Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Logical Data Model

## 📝 Notes

Database relation between Salesroom and Commodity id done through CommodityType.Code.

## 🔗 Connections (3)

- → Association: [[Commodity Type (Class 1758904)]]
- → Aggregation: [[Salesroom (Class 1556394)]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Salesroom
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | dateTime |  |
| validTo | dateTime |  |
| Commodity Type Code | dateTime |  |
