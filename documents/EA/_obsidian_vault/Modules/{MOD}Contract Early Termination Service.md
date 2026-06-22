---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CET"
domain: "Modules"
element_id: 1589280
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}Contract Early Termination Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/CET

## 📝 Notes

This class is specialization of the Service class. It keeps a setting specific for the Contract Early Termination (CET) service type.

## 🔗 Connections (2)

- ← Dependency «mapping»: [[{MOD}ServiceCETDataDto]]
- → Dependency: [[Early Repayment Algorithm Type]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Early Termination Setting
- Logical: Service CET Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Expiration Date Min Limit | Integer |  |
| Expiration Date Max Limit | Integer |  |
| Accepted Expiration Date Shift | Integer |  |
| Accept Small Underpayment | Boolean | FALSE |
| Early Repayment Algorithm | Early Repayment Algorithm Type |  |
| Enable Processing On Balance Change | Boolean | FALSE |
| Finish Contract After Processing | Boolean | FALSE |
| Set ER date as processing date | Boolean | FALSE |
| Transfer payment to bank | Boolean | FALSE |
| {ADD}Insurance cancellation period | int | NULL |
