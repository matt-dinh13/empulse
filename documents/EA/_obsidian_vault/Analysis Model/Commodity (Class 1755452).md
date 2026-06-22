---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2"
domain: "Analysis Model"
element_id: 1755452
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Commodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2

## 📝 Notes

Values for filling the individual sub-elements are retrieved as follows:

	
- Commodity type code is retrieved according to the rule Get application commodity data with Contract->Contract_2_Commodity.Commodity_ID as CommodityID on the input.
	
- Commodity category code is retrieved according to the rule Get application commodity type data with CommodityTypeCode (from the previous step) on the input.

## 🔗 Connections (3)

- ← Dependency: [[GetContractJFSPartnershipRequest]]
- → Dependency: [[Get application commodity data]]
- → Dependency: [[Get application commodity type data]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityTypeCode | string |  |
| commodityCategoryCode | string |  |
