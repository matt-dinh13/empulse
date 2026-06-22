---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1279914
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Available Merchants

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

Listed:
List of available Merchants (Code) - retrieved from external module (MERCHANT) by REST service call with GET request: /mer-web/api/active-merchants.
Example of response: ["ALFA", "BRAVO", "CHARLIE"]

If external module does not respond then message MSG_Merchant_NotAvailable is displayed and UC ends.

Multiple selection must be possible.
Not saved.

Localization code: SER_RELIP_MerchantAvailable

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Merchant | string |  |
