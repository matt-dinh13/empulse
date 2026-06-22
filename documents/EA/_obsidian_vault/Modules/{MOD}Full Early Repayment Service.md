---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/FER"
domain: "Modules"
element_id: 1808551
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {MOD}Full Early Repayment Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/FER

## 📝 Notes

This class is specialization of the Service class. It keeps a setting  specific for the full early repayment service type.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{MOD}ServiceFERDataDto]]
- ← Aggregation: [[Full Early Repayment Service Variant]]
- → Dependency: [[Early Repayment Algorithm Type]]

## 📊 Appears In (2 diagrams)

- Logical: Full Early Repayment Setting
- Logical: Service FER Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Accept Small Underpayment | Boolean | FALSE |
| Accepted Due Date Shift | Integer |  |
| DPD Max Limit | Integer |  |
| Early Repayment Algorithm | Early Repayment Algorithm Type |  |
| Moratorium | Integer |  |
| Allow Request In Moratorium | boolean |  |
| Minimum Days Before ER | Integer |  |
| Maximal Days Before ER | Integer |  |
| Allow ER Date Choice  | Boolean |  |
| Enable Processing On Balance Change | Boolean |  |
| Finish Contract After Processing | Boolean | FALSE |
| Perform Request In Moratorium | Boolean | FALSE |
| Include GIFT Payments | Boolean | FALSE |
| Set ER date as processing date | Boolean | FALSE |
| Automatic service processing | Boolean | FALSE |
| Include principal only | Boolean | FALSE |
| Use payment deposit date | Boolean | FALSE |
| {ADD}Block request reactivation | Boolean | FALSE |
| {ADD}Use current date | Boolean | FALSE |
