---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA"
domain: "Requirements Model"
element_id: 1873621
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Extension of HO_ALOP_DATA datasource used for supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA

## 📝 Notes

1/ usage of HO.BSL_CONTRACT_SUPPL_CUSTOM_DATA
Check that all stored key-values in the DB table is also used in datasource, especially key discountAmount
Value with specific key = cashPayment will be stored also as additional item with new key = downPayment

2/ commodity data
System get list of commodityIds (it means list of values with key = commodityId from BSL_CONTRACT_SUPPL_CUSTOM_DATA)
System call COMMODITY API for commodityIds list
System find commodity with highest price and use it below as CoHP
System add following key+value items to additionalData attribute. Use NULL value if no commodity found.

	
- commodityType = CoHP.CommodityTypeName (use CommodityTypeCode if CommodityTypeName is not defined)
	
- commodityPrice = CoHP.CommodityPrice
	
- totalGoodsAmount = sum of CommodityPrice for all commodities from the list

## 📊 Appears In (1 diagrams)

- Custom: CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA
