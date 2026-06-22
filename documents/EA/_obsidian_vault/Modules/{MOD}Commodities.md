---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Commodities Assignment/User Interface"
domain: "Modules"
element_id: 1662058
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}Commodities

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Commodities Assignment/User Interface

## 📝 Notes

Default order: category type code, commodity type code, model asc.
Paging: No.

System gets necessary data about commodity types and categories from commodity module as follows:

	
- For each assigned commodity type on product (Product.ProductToCommodityType.CommodityTypeCode) system gets data about commodity type via GET commodity-types with parameters:
- codes = list of commodity type codes (Product.ProductToCommodityType.CommodityTypeCode) separated by comma.


	
- Let the COM_CATEGORY be distinct list of commodity category code from all commodity types obtained in previous step
	
- System gets data about commodity category via GET commodity-categories with parameters:
- codes = COM_CATEGORY, codes are separated by comma.

## 🔗 Connections (1)

- → Realisation: [[{ADD}02.646 Remove commodity from product]]

## 📊 Appears In (1 diagrams)

- Custom: Tab Commodities

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodity category code | char |  |
| commodity category name | char |  |
| commodity type code | char |  |
| commodity type name | char |  |
| model | char |  |
| Price min | int |  |
| Price max | int |  |
| {ADD}Model Code | char |  |
| {ADD}Model Name | char |  |
