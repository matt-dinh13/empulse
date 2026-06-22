---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1879100
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Product Document Printout

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

This entity defines printout templates of respective document types for particular product. It means that the entity determines document can be printed for the product.

## 🔗 Connections (3)

- → Association: [[Document Type (Class 1877882)]]
- → Association: [[Printout Template]]
- → Aggregation: [[{MOD}Product]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Number Of Copies | Number |  |
