---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/ID/Commodities ID/Commodity ID"
domain: "Analysis Model"
element_id: 1686216
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manufacturer

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/ID/Commodities ID/Commodity ID

## 📝 Notes

Read only if it is pre-filled.
Default value: stored information from calculator

Other:
Dynamic search - Codelist value get based on calling Manufacturers REST API https://{environment}/product-catalog/openapi/v1/manufacturers/active
It is possible to store codelist value and also non-codelist value

## 🔗 Connections (2)

- → Generalization: [[Manufacturer (GUIElement 1721995)]]
- → Dependency: [[Optional (Action 1789801)]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity ID
