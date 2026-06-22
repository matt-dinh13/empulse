---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Interface"
domain: "Analysis Model"
element_id: 1255580
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BulkRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Interface

## 📝 Notes

{ADD PBR-77 /}
To support parallel processing and minimize impact on performance it is assumed that given contract is set just once.

## 🔗 Connections (2)

- → Dependency: [[RequestBody]]
- → Dependency: [[RequestHeader]]

## 📊 Appears In (1 diagrams)

- Logical: Set financial partnership - File schema

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestHeader | RequestHeader |  |
| requestBody | RequestBody |  |
