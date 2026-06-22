---
type: GUIElement
stereotype: "textbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823091
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Model

> **Type**: GUIElement · **Stereotype**: «textbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Model type for the given manufacturer.
Dynamic search is used when useModelManagement=TRUE  - Codelist get based on calling Models  REST API https://prc.{environment}/openapi/v1/models?active=true&commodityType={commodityType}&manufacturer={manufacturer} for chosen commodityType and manufacturer
It is possible to store codelist value and also non-codelist value
Field can be disabled by algorithm Obtaining Commodity Data from Manufacturer.

Localization code: GEN_CommodityModel

## 🔗 Connections (3)

- → Dependency: [[Length50 (Requirement 1708697)]]
- → Dependency: [[Extended text character set - VN,PH,KZ,IN]]
- → Dependency: [[Editable Model]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator
