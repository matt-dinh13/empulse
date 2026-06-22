---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1815128
diagrams: 0
connections: 0
tags:
  - class
  - _uncategorized
---

# 🔷 {DEL}TickedClientDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

{DEL LOR-8678/}
This data type defines mapping of loan options and client document types which should be initially ticket (chosen) in product calculator.
Source is entity Documents Selected on Product Calculator, only active records corresponding to allowed options in LoanOption are provided.

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentType | string |  |
| loanOption | LoanOption |  |
