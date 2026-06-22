---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules"
domain: "Modules"
element_id: 1877996
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get offer data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules

## 📝 Notes

{ADD PCG-3888/}
Retrieve data about offer by calling CustomerOfferWS - GetCustomerOffer with parameters 
- offerCode

note: role CUST_OFFER_WS_RO is needed on user

## 🔗 Connections (2)

- → Dependency: [[CustomerOfferWS_21]]
- ← Dependency: [[{MOD}Process application cancelation notification]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Commodity cancelation
