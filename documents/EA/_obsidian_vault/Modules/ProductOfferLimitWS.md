---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Marketing Offer/Interface Provided"
domain: "Modules"
element_id: 1387301
diagrams: 5
connections: 15
tags:
  - interface
  - modules
---

# 🔶 ProductOfferLimitWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Interface Provided

## 📝 Notes

Service used for work with product offer limits required by external systems (e.g. Loxon collections system)

## 🔗 Connections (11)

- → Dependency: [[GetProductOfferLimitsResponse]]
- → Dependency: [[02.901 Set product offer limits (UseCase 1380766)]]
- → Dependency: [[SetValidityOfProductOfferLimitsResponse]]
- → Dependency: [[SetProductOfferLimitRequest]]
- → Dependency: [[GetProductOfferLimitsRequest]]
- → Dependency: [[SetProductOfferLimitResponse]]
- → Dependency: [[SetValidityOfProductOfferLimitsRequest]]
- → Dependency «use»: [[ImportOfferLimitRequest]]
- → Dependency: [[02.904 Set validity of product offer limits (UseCase 1380762)]]
- → Dependency: [[02.902 Get product offer limit (UseCase 1612671)]]
- → Dependency «trace»: [[02.900 Import product offer limits]]

## 📊 Appears In (5 diagrams)

- Logical: ProductOfferLimitsWS
- Logical: ProductOfferLimitsWS - GetProductOfferLimits
- Logical: ProductOfferLimitsWS - ImportOfferLimits method
- Logical: ProductOfferLimitsWS - SetProductOfferLimit
- Logical: ProductOfferLimitsWS - SetValidityOfProductOfferLimits method
