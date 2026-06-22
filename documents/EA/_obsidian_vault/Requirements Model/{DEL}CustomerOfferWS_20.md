---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS"
domain: "Requirements Model"
element_id: 1815075
diagrams: 5
connections: 12
tags:
  - interface
  - requirements-model
---

# 🔶 {DEL}CustomerOfferWS_20

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS

## 📝 Notes

{DEL LOR-8678/}
This web service provides methods related to offering of loan products via external system.

## 🔗 Connections (12)

- → Realisation: [[{MOD}02.830 Recalculate Product Offers for External system]]
- → Dependency: [[{DEL}RecalculateCustomerOfferResponse]]
- → Realisation: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- → Realisation: [[02.835 Provide Product Offers for External system (UseCase 1820900)]]
- → Dependency: [[{DEL}GetCustomerOfferFault]]
- → Dependency: [[{DEL}RecalculateCustomerOfferRequest]]
- → Dependency: [[{DEL}CalculateCustomerOfferFault]]
- → Dependency: [[{DEL}CalculateCustomerOfferRequest]]
- → Dependency: [[{DEL}RecalculateCustomerOfferFault]]
- → Dependency: [[{DEL}GetCustomerOfferResponse]]
- → Dependency: [[{DEL}GetCustomerOfferRequest]]
- → Dependency: [[{DEL}CalculateCustomerOfferResponse]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-8250 Upgrade to version 21 of CustomerOfferWS
- Logical: CustomerOfferWS_v20
- Logical: CustomerOfferWS_v20 - CalculateCustomerOffer
- Logical: CustomerOfferWS_v20 - GetCustomerOffer
- Logical: CustomerOfferWS_v20 - RecalculateCustomerOffer
