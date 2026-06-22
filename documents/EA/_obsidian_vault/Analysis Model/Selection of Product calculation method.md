---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1708949
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Selection of Product calculation method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

Rules for selection of calculation method in Product calculator
Input:

	
- CUID-optional
	
- xsellOfferID-optional
	
- list of available product types- optional


User selects one of following methods:

	
- Standard method (see panel Standard calculation method).


	
- Bound offer method (see panel Bound offers calculation method)


	
- X-sell method (see panel X-sell offer calculation method)

If the list of available product types is defined, only Standard method is visible and selected.

User selects product type  according to rule Selection of Product Type for product calculation in LOR area
User can switch among available calculation methods anytime. When the user switches to another method then the Selection of Product Type is initialized.

## 🔗 Connections (2)

- → Dependency: [[Selection of Product Type for product calculation in LOR area]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Use Case: Choose product offer
