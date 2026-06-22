---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1279920
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Selected Merchants

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

Listed:
List of selected Merchants (Code) assigned to RELIP Variant. Codes are retrieved from external module (MERCHANT) by REST service call with GET request: /mer-web/api/active-merchants. 
Example of response: ["ALFA", "BRAVO", "CHARLIE"]

Multiple selection must be possible.

Localization code: SER_RELIP_MerchantSelected

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Merchant | string |  |
