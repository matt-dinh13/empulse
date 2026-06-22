---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/User Interface"
domain: "Modules"
element_id: 1652954
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Commodity Type Flags

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/User Interface

## 📝 Notes

Displays list of active Commodity Type Flag Type.
Default order: flag type code, asc.
Localization: PRD_CommodityTypeFlag

Flags assigned to Commodity Type are marked as selected. If an inactive flag type is assigned, it is also displayed and selected.
User can select/deselect required flags.

LDM: Commodity.CommodityTypeFlag.Type
When saving system:
- removes already existing assignment of flags to selected commodity type, which are not marked as selected in the list,
- creates new assignments for all flags selected in the list and yet not assigned to commodity type.

## 📊 Appears In (1 diagrams)

- Custom: Set Commodity Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| selection | boolean |  |
| name | char |  |
