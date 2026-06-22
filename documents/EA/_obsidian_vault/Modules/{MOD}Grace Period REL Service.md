---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GRREL"
domain: "Modules"
element_id: 1797023
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}Grace Period REL Service 

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/GRREL

## 📝 Notes

This class defines specific parameters of service Grace Period for REL.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[ServiceGRRELDataDto]]
- → Dependency: [[{ADD}GRREL Calculation Algorithm Type]]
- → Association: [[Grace Period REL To Tariff Item Type]]

## 📊 Appears In (2 diagrams)

- Logical: Grace period for REL
- Logical: Service GRREL Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Length | Integer |  |
| Debt Tolerance | Financial amount |  |
| Alignment with Due Date | Boolean | false |
| {ADD}Calculation Algorithm | {ADD}GRREL Calculation Algorithm Type |  |
