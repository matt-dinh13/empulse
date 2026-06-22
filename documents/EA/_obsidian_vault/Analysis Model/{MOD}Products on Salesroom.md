---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/User Interface"
domain: "Analysis Model"
element_id: 1268432
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 {MOD}Products on Salesroom

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/User Interface

## 📝 Notes

List of products assigned to salesroom

All columns are sortable.

{ADD PCG-822_18}
Data for displaying  are retrieved by method SalesPackageWS.GetSalesroomSalesItems with input data as follows:
- type (1) = SALESROOM
- value (1) = Salesroom.code
- type (2) = ITEMTYPE
- value (2) = PRODUCT
System reads structure GetSalesroomSalesItemResponse.ResultGetSalesroomSalesItem.SalesroomSalesItemValues
(in attribute description it is referenced as SSIValues).

Paging: yes

Localization code: SAV_ProductsOnSalesroom
{/ADD}

## 📊 Appears In (1 diagrams)

- Custom: Salesroom Assignment View

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Product type | string |  |
| Initial transaction type | string |  |
| Code | string |  |
| Name | string |  |
| Sale description | string |  |
| Valid from | datetime |  |
| Valid to | datetime |  |
