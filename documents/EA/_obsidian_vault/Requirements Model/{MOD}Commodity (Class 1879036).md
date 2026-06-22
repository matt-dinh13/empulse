---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)"
domain: "Requirements Model"
element_id: 1879036
diagrams: 12
connections: 35
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Commodity

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)

## 📝 Notes

Financed Commodity

## 🔗 Connections (31)

- ← Association: [[{DEL}CommoditySystemEvent]]
- ← Dependency: [[Insurance Commodity (Class 1852796)]]
- ← Association: [[Contract Service (Class 1868570)]]
- ← Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Dependency: [[{MOD}ValidateCommodityRequest]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- → Dependency: [[{MOD}CommodityDto]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- → Dependency: [[{MOD}ValidateCommodityResponse]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- → Dependency: [[Commodity Delivery Type]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Aggregation: [[Commodity Validation]]
- → Dependency: [[{MOD}ValidateCommodityResponse]]
- → Dependency: [[Commodity Status]]
- → Dependency: [[{MOD}ValidateCommodityResponse]]
- ← Generalization: [[{ADD}Commodity archive]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Aggregation: [[Commodity Validation Cancelation]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- → Dependency: [[Manufacturer (Class 1879136)]]
- → Association: [[Commodity Type (Class 1758904)]]
- → Dependency: [[{MOD}ValidateCommodityRequest]]
- ← Aggregation: [[Commodity duplication validation]]
- → Dependency: [[{MOD}ValidateCommodityResponse]]
- ← Aggregation: [[Commodity Duplication Validation List]]
- → Dependency: [[Device App]]
- → Dependency: [[Color (Class 1879033)]]

## 📊 Appears In (12 diagrams)

- Custom: CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
- Logical: Commodity Data
- Logical: Commodity data archive
- Logical: Commodity validation log
- Logical: CommoditySystemEvent schema
- Logical: Contract - Commodity
- Logical: Contract Commodity
- Logical: Contract Service
- Logical: External Commodity validation mapping
- Logical: Insurance Commodity domain

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity ID | string |  |
| Producer Disabled | Boolean | False |
| Name | string |  |
| Price | Financial amount |  |
| Price Without Tax | Financial amount |  |
| Producer | KeyValueField |  |
| Color | Color |  |
| Delivery Type | Delivery Type |  |
| Engine Number | string |  |
| Model Number | string |  |
| Serial Number | string |  |
| Ownership Book Number | string |  |
| Vehicle Registration Number | string |  |
| Vehicle Registration Expiration Date | Date |  |
| Licence Plate Number | string |  |
| Validated | Boolean | False |
| IMEI | string |  |
| {MOD}SKU | string |  |
| SKU Disabled | Boolean | False |
| Unique Number | string |  |
| MSISDN | string |  |
| Refurbished | Boolean | False |
| Date Of Activation | date |  |
| Validation Skipped | boolean | False |
| Warranty | int |  |
| Year | int |  |
| Description | string |  |
| Validation Skipped By | string |  |
| Validation Skipped Date | date |  |
| Status | string |  |
| Validation Canceled | Boolean | False |
| Model Code | string |  |
| Device App | string |  |
| Scanned | boolen | False |
| QuoteID | string |  |
| IMEI channel | string |  |
| {ADD}UniqueReferenceNumber | string |  |
| {ADD}Category ID | string |  |
| {ADD}Category Name | string |  |
| {ADD}Application number | string |  |
