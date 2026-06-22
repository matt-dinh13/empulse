---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-218 Calculatïon of Customer Offer for RELs (CBL-122)"
domain: "Requirements Model"
element_id: 1270528
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Adjust CustomerOfferWS to allow calculation of REL offers 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-218 Calculatïon of Customer Offer for RELs (CBL-122)

## 📝 Notes

1) Add new parameters to CalculateCustomerOfferRequest:
- Extra Limit

2) Add new attributes to CalculateCustomerOfferResponse (CustomerOffer):
- RELIP Offer parameters
- credit limit
- minimalInstallmentAmount
- interest rates from tariff

3) Return also REL products in CustomerOffer structure.

## 📊 Appears In (1 diagrams)

- Custom: PCG-218 Calculatïon of Customer Offer for RELs
