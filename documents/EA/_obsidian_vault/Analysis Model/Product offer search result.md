---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823005
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 Product offer search result

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

Grid showing list of available product offers (result of the last search). 
If an offer for ICT IP (Offer RELIP Service Variant) is assigned to any offer in grid , each offer service variant (OFP.OfferRELIPService.OfferRELIPServiceVariant) is displayed in separate row. 

Characteristics of columns is controlled by customization parameters

	
- Visible
	
- Order
	
- Merge

referenced by the name of column. Parameters are stored as:

	
- if global parameter GroupedOffers = False see Product Calculator Search Result Grid Parameters
	
- if global parameter GroupedOffers = True see Product Calculator Search Grouped Result Grid Parameters


Sorting of the product offers is based on parameter:

	
- SortOrder
	
- groupingResultsSortOrder, if global parameter GroupedOffers = True



LDM: Offer Financial Parameters (OFP)

Localization code: GEN_SearchResult

## 🔗 Connections (7)

- → Dependency: [[Default document container]]
- → Dependency: [[{MOD}Product preference presentation]]
- → Dependency: [[Total Insurance Premium for Product Offer]]
- → Dependency: [[{MOD}01.160 Search client]]
- → Dependency: [[01.071 Show product offer info (overview) (UseCase 1827714)]]
- → Dependency: [[{MOD}Document container check]]
- → Dependency: [[Presented interest rate in Grids]]

## 📊 Appears In (1 diagrams)

- Custom: Choose product offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document rules | semaphore icon |  |
| Product preference | icon |  |
| Number of Installments | number |  |
| Credit limit | number |  |
| Monthly installment | number |  |
| Cash payment | number |  |
| Presented Interest Rate | number |  |
| Optional service | text |  |
| Features indicator | icon |  |
| Product name | text |  |
| Insurance Premium | number |  |
| Offer detail | icon |  |
| Fill in application | icon |  |
| Send to evaluation | icon |  |
| Product offer detail info (overview) | icon |  |
