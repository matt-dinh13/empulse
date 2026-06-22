---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721978
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Model number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Model number (model Number or value based on model code) of the commodity
Other:
Dynamic search is used when useModelManagement=TRUE  - Codelist get based on calling Models  REST API https://prc.{environment}/openapi/v1/models?active=true&commodityType={commodityType}&manufacturer={manufacturer} for chosen commodityType and manufacturer
It is possible to store codelist value and also non-codelist value

Localization code:
GEN_CommodityModelNumber

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
