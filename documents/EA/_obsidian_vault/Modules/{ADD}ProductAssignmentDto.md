---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment"
domain: "Modules"
element_id: 1873488
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}ProductAssignmentDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment

## 🔗 Connections (3)

- → Dependency: [[{ADD}ProductAssignmentSalesroomDto]]
- ← Dependency: [[{ADD}ProductAssignmentsDto]]
- → Dependency: [[{ADD}ProductAssignmentsProductsDto]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom assignment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| validFrom | string |  |
| validTo | string |  |
| product | {ADD}ProductAssignmentsProductsDto |  |
| salesroom | {ADD}ProductAssignmentSalesroomDto |  |
