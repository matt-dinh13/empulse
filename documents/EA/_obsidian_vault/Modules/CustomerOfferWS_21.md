---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules"
domain: "Modules"
element_id: 1816637
diagrams: 6
connections: 17
tags:
  - interface
  - modules
---

# 🔶 CustomerOfferWS_21

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules

## 📝 Notes

This web service provides methods related to offering of loan products via external system.

## 🔗 Connections (17)

- → Dependency: [[UpdateOfferResponse]]
- → Dependency: [[GetCustomerOfferResponse]]
- → Realisation: [[{MOD}02.830 Recalculate Product Offers for External system]]
- → Dependency: [[CalculateCustomerOfferResponse]]
- → Dependency: [[CalculateCustomerOfferRequest]]
- → Dependency: [[RecalculateCustomerOfferResponse]]
- → Dependency: [[GetCustomerOfferRequest]]
- → Dependency: [[UpdateOfferRequest]]
- → Dependency: [[RecalculateCustomerOfferFault]]
- → Dependency: [[GetCustomerOfferFault]]
- → Dependency: [[UpdateOfferFault]]
- → Dependency: [[{MOD}RecalculateCustomerOfferRequest]]
- → Realisation: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- → Realisation: [[{MOD}01.170 Update offer externally]]
- → Realisation: [[02.835 Provide Product Offers for External system (UseCase 1820900)]]
- → Dependency: [[CalculateCustomerOfferFault]]
- ← Dependency: [[{ADD}Get offer data]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Logical: CustomerOfferWS_v21
- Logical: CustomerOfferWS_v21 - CalculateCustomerOffer
- Logical: CustomerOfferWS_v21 - GetCustomerOffer
- Logical: CustomerOfferWS_v21 - RecalculateCustomerOffer
- Logical: CustomerOfferWS_v21 - UpdateOffer
