---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845091
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}SubventionDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

SubventionDto 
 

	
- participantType
must exists participant type SubventionParticipantTypeDto [REQUIRED]
	
- toClientPercentage
if discount = true then set to 100 
less than 1 and only 6 decimal places are allowed 
[INVALID_PERCENTAGE]
	
- fixedAmount
	
- percentageType
must fulfill Search for Allowed Base Types by Usage for usage 'SUPC'
[INVALID_BASE_TYPE]
	
- percentage
less than 10 and only 6 decimal places are allowed [INVALID_PERCENTAGE]
	
- discount
	
- commodityType
only when globalParameter.SubventionPerCommodityType (BL_SUBV_COMMODITY_CAT) = true
must exists in Commodity Type
[COMMODITY_TYPE_NOT_FOUND]
If modelCode is filled then commodityType must corresponds with Model.CommodityType
	
- currency
must exists in Currency 
[INVALID_CURRENCY]
	
- roundingType
Must exists in RoundingTypeDto
	
- roundingScale
value between 0 and 1,000,000,000 or equal 0
[INVALID_ROUNDING_SCALE]
	
- percentagetype, percentage, roundingType, roundingScale
must be filled all together or none
	
- purpose
must exists in Subvention Purpose
	
- modelCode
only when commodityType is filled
must exists in Model
	
- {ADD PCG-4738}minimalGoodsPrice
must be => 0
must be <= maximalGoodsPrice
	
- maximalGoodsPrice
must be => 0
must be <= minimalGoodsPrice
	
- minimalCommodityPrice
only when globalParameter.SubventionPerCommodityType (BL_SUBV_COMMODITY_CAT) = true
must be => 0
must be <= maximalCommodityPrice
	
- maximalCommodityPrice
only when globalParameter.SubventionPerCommodityType (BL_SUBV_COMMODITY_CAT) = true
must be => 0
must be <= minimalCommodityPrice
	
- promoActionCode
must exists in Promo Action.Code where Active = true{/ADD}


Cross validation:

	
- Combination of (Participant, CommodityType, Purpose, ModelCode{ADD PCG-4813}, PromoActionCode{/ADD}) must be unique in scope of subvention on product inclusive combination (Participant, CommdityType = not defined, Purpose, ModelCode = not defined{ADD PCG-4813}, PromoActionCode = not defined{/ADD})
	
- for combination of (Participant, CommodityType, Purpose=ALTERNATIVE, ModelCode{ADD PCG-4813}, PromoActionCode{/ADD}), the combination of (participant, commodityType, purpose = STANDARD, ModelCode{ADD PCG-4813}, PromoActionCode{/ADD}) must already exists.

## 🔗 Connections (2)

- → Dependency: [[Search for Allowed Base Types by Usage]]
- ← Dependency: [[Product - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
