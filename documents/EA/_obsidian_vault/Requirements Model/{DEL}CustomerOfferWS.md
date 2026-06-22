---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS"
domain: "Requirements Model"
element_id: 1816634
diagrams: 7
connections: 25
tags:
  - interface
  - requirements-model
---

# 🔶 {DEL}CustomerOfferWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS

## 📝 Notes

{DEL LOR-8678/}
This web service provides methods related to offering of loan products via external system.

## 🔗 Connections (20)

- → Dependency: [[{DEL}GetProductsForCommodityResponse (Class 1816552)]]
- → Dependency: [[{DEL}GetCustomerOfferFault (Class 1816540)]]
- → Dependency: [[{DEL}RecalculateCustomerOfferResponse (Class 1816577)]]
- → Dependency: [[{DEL}GetCodeListRequest (Class 1816569)]]
- → Dependency: [[{DEL}GetCustomerOfferResponse (Class 1816539)]]
- → Realisation: [[02.835 Provide Product Offers for External system (UseCase 1820900)]]
- → Dependency: [[{DEL}RecalculateCustomerOfferRequest (Class 1816579)]]
- → Dependency: [[{DEL}CalculateCustomerOfferResponse (Class 1816609)]]
- → Dependency: [[{DEL}GetProductsForCommodityRequest (Class 1816549)]]
- → Realisation: [[{MOD}02.830 Recalculate Product Offers for External system]]
- → Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]
- → Realisation: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- → Dependency: [[{DEL}RecalculateCustomerOfferFault (Class 1816578)]]
- → Dependency: [[{DEL}GetCodeListFault]]
- → Dependency: [[{DEL}CalculateCustomerOfferFault (Class 1816607)]]
- → Dependency: [[{DEL}GetProductsForCommodityFault (Class 1816547)]]
- → Dependency: [[{DEL}CalculateCustomerOfferRequest (Class 1816615)]]
- → Realisation: [[{DEL}02.840 Provide Offer CodeLists for External system (UseCase 1820898)]]
- → Realisation: [[{DEL}02.845 Provide Products for Finacing of Commodity for External system (UseCase 1820896)]]
- → Dependency: [[{DEL}GetCustomerOfferRequest (Class 1816542)]]

## 📊 Appears In (7 diagrams)

- Custom: LOR-8250 Upgrade to version 21 of CustomerOfferWS
- Logical: CustomerOfferWS
- Logical: CustomerOfferWS - CalculateCustomerOffer
- Logical: CustomerOfferWS - GetCodeList
- Logical: CustomerOfferWS - GetCustomerOffer
- Logical: CustomerOfferWS - GetProductsForCommodity
- Logical: CustomerOfferWS - RecalculateCustomerOffer
