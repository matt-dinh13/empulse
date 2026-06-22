---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/User Interface"
domain: "Analysis Model"
element_id: 1268430
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 {ADD}Services on Salesroom

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/User Interface

## 📝 Notes

{ADD PCG-822_18/}
List of services assigned to salesroom.

Displayed only if GlobalParameter.UseSalesPackage = True.

All columns are sortable.

Data for displaying  are retrieved by method SalesPackageWS.GetSalesroomSalesItems with input data as follows:
- type (1) = SALESROOM
- value (1) = Salesroom.code
- type (2) = ITEMTYPE
- value (2) = SERVICE
System reads structure GetSalesroomSalesItemResponse.ResultGetSalesroomSalesItem.SalesroomSalesItemValues
(in attribute description it is referenced as SSIValues).

Paging: yes

Localization code: SAV_ServicesOnSalesroom

## 📊 Appears In (1 diagrams)

- Custom: Salesroom Assignment View

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service type | string |  |
| Code | string |  |
| Name | string |  |
| Description | string |  |
| Valid from | datetime |  |
| Valid to | datetime |  |
