---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/User Interface model"
domain: "Analysis Model"
element_id: 1843485
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Commodity Code - Name

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/User Interface model

## 📝 Notes

{ADD CLM-6817 /}
VN only
List of commodities related to transaction supplement.
Source of commodities IDs: Contract Supplement.Custom Data (where Key = commodityId).Value
Commodity API is called to get Code and Name for each commodityId. 
Localization code: SUP_CommodityCode, SUP_CommodityName

## 📊 Appears In (1 diagrams)

- Custom: Transaction Supplement detail
