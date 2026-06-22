---
type: GUIElement
stereotype: "checkbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/ID/Commodities ID/Commodity ID"
domain: "Analysis Model"
element_id: 1686219
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Home delivery

> **Type**: GUIElement · **Stereotype**: «checkbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/ID/Commodities ID/Commodity ID

## 📝 Notes

Default unchecked.

LDM source:
Commodity.deliveryTypeCode

LDM Source: 
Rules
Checkbox value=TRUE-> Delivery_type="GD"  
Checkbox value=FALSE-> Delivery_type=null  

Localization code: 
GEN_HomeDelivery

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity ID
