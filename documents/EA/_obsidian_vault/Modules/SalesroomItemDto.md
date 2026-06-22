---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom"
domain: "Modules"
element_id: 1736099
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 SalesroomItemDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom

## 📝 Notes

If GlobalParameter.BL_USE_SALES_PACKAGE = false then get data from Salesroom.SalesroomProduct
If GlobalParameter.BL_USE_SALES_PACKAGE = true then get data from Salesroom.SalesroomToSalesPackage

## 🔗 Connections (1)

- ← Dependency: [[SalesroomDto (Class 1736098)]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| itemCode | string |  |
| validFrom | date |  |
| validTo | date |  |
