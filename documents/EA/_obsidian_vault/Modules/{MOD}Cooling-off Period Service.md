---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/COP"
domain: "Modules"
element_id: 1586741
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}Cooling-off Period Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/COP

## 📝 Notes

This class is specialization of the Service class. It keeps a setting  specific for the cooling-off period service type

## 🔗 Connections (2)

- ← Dependency «mapping»: [[{MOD}ServiceCOPDataDto]]
- → Dependency: [[Early Repayment Algorithm Type]]

## 📊 Appears In (2 diagrams)

- Logical: Cooling-off Period Service definition
- Logical: Service COP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Accept Small Underpayment | Boolean | FALSE |
| Accepted Due Date Shift | Number |  |
| COP Length | int |  |
| Early Repayment Algorithm | Early Repayment Algorithm Type |  |
| Finish Contract After Processing | Boolean | FALSE |
| Set ER date as processing date | Boolean | FALSE |
| Request required for processing | boolean | FALSE |
