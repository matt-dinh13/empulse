---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model"
domain: "Modules"
element_id: 1846099
diagrams: 2
connections: 7
tags:
  - class
  - modules
---

# 🔷 Service Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service Catalog/COMMON for Service Catalog/Logical Data Model

## 📝 Notes

{ADD PCG-3135/}
Type of service in service catalog

## 🔗 Connections (7)

- ← Aggregation: [[Document Setting]]
- ← Aggregation: [[Service Type Role]]
- ← Aggregation: [[{ADD}SC Service Type Flag Type]]
- ← Aggregation: [[Eligibility Check]]
- ← Aggregation: [[Service Type Parameter (Class 1846087)]]
- ← Dependency: [[Service (Class 1846080)]]
- ← Aggregation: [[Service Type Category]]

## 📊 Appears In (2 diagrams)

- Logical: Service Structure
- Logical: Service Type Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean |  |
