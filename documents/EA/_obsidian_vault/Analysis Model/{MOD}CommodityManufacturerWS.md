---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CommodityManufacturerWS"
domain: "Analysis Model"
element_id: 1874437
diagrams: 3
connections: 6
tags:
  - interface
  - analysis-model
---

# 🔶 {MOD}CommodityManufacturerWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CommodityManufacturerWS

## 📝 Notes

Functionality for communication with external provider (Manufacturer) for getting information about particular commodity. 

{MOD BRVN-15} Decommissioned for VN {/MOD}

## 🔗 Connections (6)

- → Dependency: [[{MOD}ValidateCommodityResponse]]
- → Dependency: [[GetCommodityDataRequest]]
- → Realisation: [[01.010 Choose product offer (UseCase 1827711)]]
- → Dependency: [[GetCommodityDataResponse]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- → Realisation: [[{MOD}POST Commodity Validation]]

## 📊 Appears In (3 diagrams)

- Logical: Commodity External Validation
- Logical: Getting Commodity Data from Manufacturer
- Logical: OSB API
