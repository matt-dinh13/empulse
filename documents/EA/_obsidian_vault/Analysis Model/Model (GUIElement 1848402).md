---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/User Interface Model"
domain: "Analysis Model"
element_id: 1848402
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Model

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/User Interface Model

## 📝 Notes

{ADD CBL-15437 CLM-4455}
Model code of the commodity. Enumeration for this attribute is based on REST API searchModels with parameters commodityType and manufacturer (if exists). 
User is allowed to update modelCode OR modelNumber (not bot of them).

LDM:
LDM for displayed value: getCommodities.ModelCode
LDM for value saving: updateCommodities.ModelCode

Localization code:
GEN_CommodityModel

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
