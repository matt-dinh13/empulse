---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1280682
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Interest Rates from Tariff

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Algorithm finds a set of all Interest rates for particular Product Offer (for ProductType = REL).


	
- Finds Set of tariffs:
a) Tariff assigned to Product on which the Offer is based on (OFP.Tariff),
b) Tariff assigned to each Service which is part of the Offer (OFP.OfferService.Tariff).
	
- Find Tariff Items in Set of Tariffs where 
TariffItem.CalculationMethod in [P(Percentage), A (Annual percentage)]
AND TariffItem.TariffItemType.Category = I (Interest)
AND TariffItem.TariffItemType.Usage = CRDS (Card transaction)
	
- Sort the result by TariffItem.Group asc, TariffItem.TariffItemType.Code asc, TariffItem.TariffItemType.Name asc.
	
- Return the list.

## 🔗 Connections (1)

- ← Dependency: [[Interest Rates]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Financial parameters
