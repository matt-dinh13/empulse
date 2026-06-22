---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1708948
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Total Insurance Premium for Product Offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Input:
- Product Offer 
OFP = Offer Financial Parameters of particular Product Offer from input

Output:
- Total Insurance Premium for all insurance services assigned to the Product Offer

Total Insurance Premium is calculated as sum of OFP.OFPItem.OFPServiceTariffItem.ItemAmount 
where
OFP.OFPItem.OFPServiceTariffItem->OfferService->Service->ServiceType.Category = 'INSURANCE'
and
OFP.OFPItem.OFPServiceTariffItem->TariffItem->TariffItemType.Usage = 'S' (Service)

## 🔗 Connections (1)

- ← Dependency: [[Product offer search result]]
