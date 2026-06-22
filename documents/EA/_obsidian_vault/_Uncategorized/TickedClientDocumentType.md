---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1816692
diagrams: 0
connections: 0
tags:
  - class
  - _uncategorized
---

# 🔷 TickedClientDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

This data type defines mapping of loan options and client document types which should be initially ticket (chosen) in product calculator.
Source is entity Documents Selected on Product Calculator, only active records corresponding to allowed options in LoanOption are provided.

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentType | string |  |
| loanOption | LoanOption |  |
