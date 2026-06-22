---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1721999
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manufacturer

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

WS Source:
producer code obtained from commodity module

Disabled if: CommodityType.flags = 'SKU'.

Localization code:
GEN_CommodityManufacturer

Other:
Codelist values get based on calling Manufacturers REST API
https://{environment}/product-catalog/openapi/v1/manufacturers/active

LDM source:
Commodity.producerCode

## 🔗 Connections (4)

- ← Generalization: [[Manufacturer (GUIElement 1686235)]]
- ← Generalization: [[Manufacturer (GUIElement 1686259)]]
- → Dependency: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency: [[Manufacturer (Class 1879136)]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity - product AF
