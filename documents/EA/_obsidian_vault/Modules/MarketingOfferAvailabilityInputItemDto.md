---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided"
domain: "Modules"
element_id: 1728216
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 MarketingOfferAvailabilityInputItemDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided

## 🔗 Connections (3)

- → Dependency: [[InitialTransactionType]]
- → Dependency: [[ProductTypeCode]]
- ← Dependency: [[MarketingOfferAvailabilityInputDto]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Features

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestId | string |  |
| productCodes | string |  |
| productType | string |  |
| commodityType | string |  |
| initialTransactionType | string |  |
| maximalCreditAmount | integer |  |
