---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1708938
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Reset of Product preferences according to selected Calculation method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

If Bound offer or X-sell offer method is selected, the part "Product preferences" is reset as follows:
CMO = selected record in responseCMO

	
- Commodity type: only if filterCommoditiesForMO=TRUE
Let CO_CommodityType is a set of all commodity types allowed by . The set is a union of the following:
- CMO.commodityType, 
- set of all commodity types defined by CMO.product.commodityType.
Let SAL_CommodityType is a set of all commodity types currently allowed for the salesroom. This is defined by the retrieved values from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)
Then, the list of commodity type contains values defined as intersection of CO_CommodityType and SAL_CommodityType.

If there is exactly one value in the intersection, the field is pre-filled by that value and disabled. Otherwise it is pre-filled by "empty" and enabled and user can choose the values from the intersection The filed "Commodity category" must be re-calculated accordingly.

	
- Maximum monthly payment - the value is set based on CMO.maximalMonthlyInstallmentCO (if not null)
	
- Credit amount - the value is set based on CMO.maximalCreditAmount (if not null)
	
- Marketing action - the value is set based on CMO.marketingAction and disabled (if not null).
	
- Maximum number of terms - the value is set based on CMO.maxTenor and enabled (if not null).

## 🔗 Connections (2)

- → Dependency: [[Available commodity types for salesroom]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Use Case: Choose product offer
