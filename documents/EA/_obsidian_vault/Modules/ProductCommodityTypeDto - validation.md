---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845092
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 ProductCommodityTypeDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

ProductCommodityTypeDto 

	
- commodityTypeCode
product.useFinancingScheme = Flase
product.productProfile.productType = SAI or product.productProfile.InitialTransaction = POS



	
- commodityTypeCode
must exists in list of commodity types returned by Get list of commodity types
[COMMODITY_TYPE_NOT_FOUND]
	
- priceMin
Only if GlobalParameter.CommodityPriceLimit (PCG_COMMODITY_PRICE_LIMIT) = True
equal or higher than 0
[INVALID_NUMBER]
	
- priceMax
Only if GlobalParameter.CommodityPriceLimit (PCG_COMMODITY_PRICE_LIMIT) = True
equal or higher than 0
[INVALID_NUMBER] 
higher than commodityPriceMin
[NVALID_PRICE_MAX]
	
- currency
must exist in Currency
[INVALID_CURRENCY, REQUIRED]
	
- model
Only one of model or modelCode can be filled
	
- modelCode
Only one of model or modelCode can be filled

## 🔗 Connections (2)

- → Dependency: [[Get list of commodity types]]
- ← Dependency: [[Product - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
