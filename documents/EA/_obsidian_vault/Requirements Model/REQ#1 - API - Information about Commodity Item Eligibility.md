---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-290 API - Information about Commodity Item Eligibility (CBL-238)"
domain: "Requirements Model"
element_id: 1270657
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - API - Information about Commodity Item Eligibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-290 API - Information about Commodity Item Eligibility (CBL-238)

## 📝 Notes

Prepare WS, which returns information about product available for financing of specified commodity type on specified salesroom.

Request:
- salesroom code
- commodity type
- list of product profiles (optional)  

Response:
- product code
- product type
- product currency
- manufacturer code (list of manufacturers assigned to product)
- product variant code
- minimum and maximum credit amount
- minimum and maximum cash payment rate
- AIR (will be provided only for CEL products)
- list of available terms (will be provided only for CEL products)

If product profiles are defined, then filter products by product profiles, otherwise return results for all product profiles.

## 📊 Appears In (1 diagrams)

- Custom: PCG-290 API - Information about Commodity Item Eligibility (CBL-238)
