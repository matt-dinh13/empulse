---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1721995
diagrams: 1
connections: 7
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manufacturer

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

Source:
producer name obtained from commodity module 

Disabled if CommodityType.flags = 'SKU'.

Localization code:
GEN_CommodityManufacturer

LDM source:
Commodity.producerName

## 🔗 Connections (7)

- ← Generalization: [[Manufacturer (GUIElement 1686216)]]
- ← Generalization: [[Manufacturer (GUIElement 1686241)]]
- ← Generalization: [[Manufacturer (GUIElement 1686249)]]
- ← Generalization: [[Manufacturer (GUIElement 1686258)]]
- → Dependency: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency: [[Autocompletion]]
- → Dependency: [[{DEL}Manufacturer Whisperer]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity - product AF
