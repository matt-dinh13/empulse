---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11677/CLM-3701 - Client center - Customer offer tab v2"
domain: "Modules"
element_id: 1800101
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM - Client center - Customer offer tab v2 - notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-11677/CLM-3701 - Client center - Customer offer tab v2

## 📝 Notes

- Implement Customer offer tab v2
	
- Implement integration of Client Detail header to OFS - Active Offer notification (Get Party Offers)
	
- Use BSL empty page to display Update offer modal (CLM-3691)
	
- Generate notification to CCH instead of generating OfferDisplayedSE
	
- Simplify getting of active offers from OFS - now we call SalesFeaturesWS to get availability on salesroom for all active offers even in case we don't need to filter offers based on salesroom availability

## 📊 Appears In (1 diagrams)

- Custom: CLM-3701 - Client center - Customer offer tab v2 - notification
