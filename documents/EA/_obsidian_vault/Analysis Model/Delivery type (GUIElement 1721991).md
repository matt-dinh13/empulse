---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1721991
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Delivery type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

delivery type obtained from commodity module 

LDM source:
Commodity.deliveryTypeCode

Localization code: 
GEN_CommodityDeliveryType

Other:
Codelist value from Contract.Common.Delivery_Type
Visible only if CommodityType.flags = 'WITH_DELIVERY'.

## 🔗 Connections (4)

- ← Generalization: [[Delivery type (GUIElement 1686236)]]
- ← Generalization: [[Delivery Type]]
- → Dependency: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency: [[Commodity Delivery Type]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity - product AF
