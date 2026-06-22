---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/CMS API/Business Rules"
domain: "Modules"
element_id: 1809897
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get list of card types

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/CMS API/Business Rules

## 📝 Notes

{ADD PCG-4568/}
List of available Card types is retrieved from external module (Card management system) by REST service call with POST request: Card Management System (CMS)  /rest-api/v2/card-types with parameters:
projection=  CARD_TYPE_SEARCH_PCG
limit=50
offset=0
body of request is left empty

## 🔗 Connections (2)

- → Dependency: [[{ADD}Card Management system (CMS)]]
- ← Dependency: [[CARD service parameter validation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Validation Rules
