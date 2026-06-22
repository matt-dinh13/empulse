---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Validation Rules"
domain: "Modules"
element_id: 1157778
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 TBD Offer Request Validation Rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Validation Rules

## 📝 Notes

Validation of Offer Request structure.

Offer Request Service Type - cardinality = 0..*

	
- Service Type - mandatory, reference to existing ServiceType.Code
	
- Preference - mandatory, reference to existing ServicePreferenceType.Code


Offer Request Commodity - cardinality = 0..ProductCatalogueGlobalParameter(COMMODITY_NUMBER_LIMIT_MAX)

	
- Commodity Type - mandatory, reference to existing CommodityType.Code
	
- Commodity Model - optional, reference to existing CommodityModel.Code
	
- Price - mandatory, type Financial Amount, Price >= 0


Offer Request Parameter - cardinality = 0..*
Parameter is specified by code of Parameter Type
Validation rules are described in definition of Offer Request Parameter Type.

Cross-validations

	
- If Offer Request Parameter(PRODUCT_VARIANT) is defined then just one Product must defined by Offer Request Parameter(PRODUCT) and ProductVariant with specified number must be part of such Product.
	
- If Offer Request Parameter(INITIAL_TRANSACTION_TYPE) = POS then at least one Offer Request Commodity is defined.


	
- If Offer Request Parameter(INITIAL_TRANSACTION_TYPE) <> POS then Offer Request Parameter (REQUIRED_CREDIT_AMOUNT) is mandatory.


	
- If Offer Request Parameter(SORT_OFFER_BY_1) is defined then Offer Request Parameter (SORT_OFFER_ORDER_1) is mandatory.
	
- If Offer Request Parameter(SORT_OFFER_BY_2) is defined then Offer Request Parameter (SORT_OFFER_ORDER_2) is mandatory.

## 📊 Appears In (1 diagrams)

- Logical: Offer Request Validation Rules
