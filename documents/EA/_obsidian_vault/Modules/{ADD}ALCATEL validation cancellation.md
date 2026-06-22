---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881766
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}ALCATEL validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5649/}
For country: IN

System obtain dealer attributes by Get data from DMS with parameters:
- salesroom = salesroom code
- manufacturer = ALCATEL
- eventType = ALCATEL_IMEI

System calls external system for authentication token
url test environment: https://demo-api.unideserp.com/
url prod environment: TBD after tests
endpoint: POST /payments-partner/authenticate
api_key: 19c0a1962951429ca2c6de9828decb87
partner_code: HOMECREDITDEV.JQGILYLPKFIUSYEKSZYXRIJMFCSASTK

System calls external system for validation cancellation with data from commodity.
endpoint: POST /payments-partner/stock/unblock
Request body parameters:
retailer_code = dealer (from DMS)
product_identification_number = value (commodity.IMEI or commodity.SerialNumber from External validation cancellation )
product_sku_code = commodity.modelCode or commodity.modelNumber if modelCode is not filled

note: documentation for Alcatel integration assigned in BRIN-1163

## 🔗 Connections (2)

- ← Dependency: [[{MOD}External validation cancellation]]
- → Dependency: [[{ADD}Get data from DMS]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5649 BRIN-1163 - ALCATEL - API Integration
