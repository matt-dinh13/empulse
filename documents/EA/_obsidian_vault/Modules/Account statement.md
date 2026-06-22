---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/ACCSTMT"
domain: "Modules"
element_id: 1697429
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 Account statement

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/ACCSTMT

## 📝 Notes

{ADD PCG-1458/}
Service for storing printout template for account

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{ADD}ServiceACCSTMTData]]
- → Dependency: [[Printout Template]]
- → Dependency: [[{DEL}Email Template]]

## 📊 Appears In (2 diagrams)

- Logical: ACCSTMT
- Logical: Service ACCSTMT Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Statement Printout Template | Printout Template |  |
| {MOD}Email Template | string |  |
