---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Business Rules"
domain: "Analysis Model"
element_id: 1708942
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Selection of Product Type for product calculation in LOR area

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Business Rules

## 📝 Notes

Rules used for selection of product type in product calculator.
Allowed Product Types (A_ProductType) depend on
- set of product types assigned to salesroom (SAL_ProductType)
- list of available product types from input
- set of product types assigned to selected X-sell/bound offer (CO_ProductType) 
Product type in this rule is defined as combination of product type, initial transaction type, IsDebit.

CO_ProductType is empty by default.
If an X-sell or bound offer is selected then CO_ProductType is defined by the rule Get Product Type of Marketing Offer. IsDebit is set to FALSE for all combinations in CO_ProductType.
SAL_ProductType (product type, initial transaction type, isDebit from corresponding Product Profile) is a set of all product types retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)

If marketing offer is not chosen then A_ProductType = SAL_ProductType.
Else A_ProductType = CO_ProductType for selected X-sell or bound offer.

Following options are offered:

	
- Consumer loan - visible if any Product Type with Initial Transation Type = POS is defined in A_ProductType
	
- Cash loan - visible if any Product type with Initial Transation Type = CASH is defined in A_ProductType


	
- Revolving loan without initial transaction - visible if Product Type = REL with Initial Transation Type = NDF and Is Debit = false is defined in A_ProductType
	
- Debit card - visible if Product Type = REL with Initial Transation Type = NDF and IsDebit = true is defined in A_ProductType
	
- Standalone insurance - visible if Product Type = SAI is defined in A_ProductType

Product Type, Initial Transaction Type and Is Debit are retrieved attributes from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode)
Initially no product type is selected and the selection is mandatory.
Product types are filtered by the list of available product types.
If there is exactly one option available, it is automatically selected. 
For bound-product and x-sell calculation method the panel is hidden until a Marketing Offer is selected.

## 🔗 Connections (5)

- ← Dependency: [[Create new debit card]]
- ← Dependency: [[Selection of Product calculation method]]
- ← Dependency: [[Selection of Document Type on Product Calculator]]
- → Dependency: [[Get Product Type of Marketing Offer]]
- ← Dependency: [[Product type for product calculator]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
