---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1721992
diagrams: 1
connections: 7
tags:
  - guielement
  - analysis-model
---

# 🖥️ Model

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

Source:
model obtained from commodity module

Disabled if CommodityType.flags = 'SKU'

Other:
Dynamic search is used when useModelManagement=TRUE  - Codelist get based on calling Models  REST API https://prc.{environment}/openapi/v1/models?active=true&commodityType={commodityType}&manufacturer={manufacturer} for chosen commodityType and manufacturer
It is possible to store codelist value and also non-codelist value
Localization code:
GEN_CommodityModel

## 🔗 Connections (7)

- ← Generalization: [[Model (GUIElement 1686213)]]
- ← Generalization: [[Model (GUIElement 1686238)]]
- ← Generalization: [[Model (GUIElement 1686246)]]
- ← Generalization: [[Model (GUIElement 1686263)]]
- → Dependency: [[Autocompletion]]
- → Dependency: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency: [[{DEL}Model Whisperer]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity - product AF
