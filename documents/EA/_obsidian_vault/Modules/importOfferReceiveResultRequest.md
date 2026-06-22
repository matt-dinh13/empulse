---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Consumed"
domain: "Modules"
element_id: 1082149
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 importOfferReceiveResultRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Consumed

## 🔗 Connections (2)

- ← Dependency «use»: [[ResultOfImportOfferLimitsWS]]
- → Dependency: [[resultCodeStatus]]

## 📊 Appears In (1 diagrams)

- Logical: ResponseOfImportOfferLimitsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| batchCode | string |  |
| status | string |  |
| errorDescription | string |  |
