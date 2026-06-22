---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules"
domain: "Modules"
element_id: 1867126
diagrams: 1
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Base type validation based on tariff item type

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules

## 📝 Notes

For country: PH
// validation of allowed Base type based on tariff item type settings
Based on Fees determination, which is used during offer calculation.

Abbreviations:
TI = currently checked TariffItem
TARIFF = superior Tariff
TIT = TI.TariffItemType
TITFlag = Flag assigned to TIT, e.g. TITFlag(CEL) means flag of type CEL assigned to TIT

OriginationFee is defined as
- TIT.UsageType = 'Standard (A)' or UsageType = 'Service(S)'
- TIT.ChargingPeriodicity = ONE_TIME

OriginationFee allowed base types

	
- TILN (Tariff Item Limit Number)
TN (Number of Terms)


	
- TILA (Tariff Item Limit Amount)
GP (Goods Price)
SGP (Service Goods Price)
SP (Simple Principal)
	
- TILV (Tariff Item Limit Value)
PUR (Purpose)
DM (Disbursement Method)


	
- TIPC (Tariff Item Percentage Calculation)
GP (Goods Price)
SGP (Service Goods Price)
SI (Sum Insured)
SP (Simple Principal)
WP (Whole Principal)
NCL (Net Credit Limit)
GPS (Goods Price Subsidized)
WPI (Whole Principal without Insurance)
SUBP (Supsidized Principal)
CP (Cash Principal)
PSP (Proportional Simple Principal)

## 🔗 Connections (5)

- ← Dependency: [[Limit amount based on (GUIElement 1867017)]]
- ← Dependency: [[Limit value based on]]
- ← Dependency: [[Percentage based on (GUIElement 1866995)]]
- ← Dependency: [[Limit number based on (GUIElement 1866990)]]
- ← Dependency: [[{MOD}TariffItemDto - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
