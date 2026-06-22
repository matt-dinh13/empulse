---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)"
domain: "Modules"
element_id: 1217853
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 GetMarketingOffersResponse - validation rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)

## 📝 Notes

// Validation of received product offer limits

GetMarketingOffersResponse.MarketingOffer.MarketingOfferDataProduct
Mandatory items:

	
- offerName
Length <= 255
	
- campaignID
Length <= 20


	
- validFrom
Mandatory


Optional items:

	
- campaignType
Length <= 20
	
- campaignSubType
Length <= 20


	
- validTo
validTo >= validFrom 


	
- productType is in enumeration Product Type 


	
- initialTransactionType is in enumeration Product Transaction Type
If initialTransactionType is filled in then productType is mandatory.


	
- product is registered in Product 


	
- marketingAction is in code list Marketing Action


	
- commodityType is in code list Commodity Type 
	
- currency is in code list Currency
	
- minimalCashPayment >= 0
	
- maximalMonthlyInstallment >= 0


	
- maximalCreditAmount >= 0


Cross validation:

	
- // Is received product valid in Product Catalog ?
If NOT(product.Product.ValidFrom =< current date =< product.Product.ValidTo(or product.Product.ValidTo is not defined )) then product is ignored (removed from response)


	
- Either both or non of (productType, initialTransactionType) must be defined


	
- Either (productType + initialTransactionType) or any product must be defined

## 🔗 Connections (1)

- ← Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]

## 📊 Appears In (2 diagrams)

- Custom: Marketing Offers from SAS
- Use Case: Customer Marketing Offers
