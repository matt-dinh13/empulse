---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Access Rights"
domain: "Modules"
element_id: 1878722
diagrams: 7
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {MOD}POST Commodity Validation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Access Rights

## 📝 Notes

Returns Commodities for update (with field settings) by commodity codes (commodity_id).

## 🔗 Connections (8)

- ← Realisation: [[commodities-validation]]
- ← Association: [[External System (Actor 1854672)]]
- ← Realisation: [[{MOD}CommodityManufacturerWS]]
- ← Dependency: [[{MOD}ValidateCommodityResponse]]
- ← Dependency: [[{MOD}ValidateCommodityResponse]]
- → Dependency: [[Commodity Validation algorithm]]
- → Dependency: [[Commodity Validation Rule filter]]
- → Realisation: [[01.693 Validate commodity data from external systems]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: PCG-4746 CBL-24598 [SUBVENTION] UPDATE OPPO IMEI VALIDATION INFORMATION
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
- Logical: Commodity API
- Logical: Commodity External Validation
- Use Case: Use Case
