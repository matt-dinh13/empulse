---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1822836
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Setting of commodity attributes

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

If newDefinitionOfCommodityPanel = TRUE then 
system evaluates all provided CommodityFieldSetting attributes from the response of calling respective method of commodity Module:
- use CommodityFieldSetting.attributeCode value to find particular edit box, if found then update its properties according to CommodityFieldSetting.FieldSettingType value:
  -- MANDATORY - set edit box as mandatory
  -- VISIBLE - set edit box visible (it override default country specific visibility)
  -- HIDDEN - set edit box hidden (it override default country specific visibility)
  -- DISABLED - set edit box disabled
  - EDITABLE - set edit box editable

Note:
Supported fields:
- model

## 🔗 Connections (1)

- ← Dependency: [[Commodity - product AF (GUIElement 1722002)]]

## 📊 Appears In (2 diagrams)

- Custom: Commodity - product AF
- Custom: Product business rules
