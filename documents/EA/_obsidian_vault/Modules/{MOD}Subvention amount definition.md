---
type: Requirement
stereotype: "Requirement"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1822512
diagrams: 4
connections: 7
tags:
  - requirement
  - modules
---

# 📋 {MOD}Subvention amount definition

> **Type**: Requirement · **Stereotype**: «Requirement»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

A subsidy on commodity paid by Manufacturer or Partner which is used to: 

If subvention is allocated to Client 
- decreasing of the amount of loan to be paid by the client (if Subvention.Discount = true)
- decreasing of annuity base amount
If subvention is allocated to HC 
- increasing loan yield of HC. 
Subvention is defined individually for each product. 

Subventions are calculated based on SubventionDefinition on Product and finally saved into structure OfferFinancialParameters.OfferSubventionItem.

Subvention amount is calculated for each Subvention.Purpose separately.
// only subvention with purpose = STANDARD are taken into account during offer calculation
{ADD PCG-4742}
// check promo action code
PromoActionCode from input needs to be active and valid in date of offer generation. Select PromoActionCode from Promo Action where code = PromoActionCode
 - PromoAction.Active = true
 - PromoAction.ValidFrom <= current date
 - PromoAction.ValidTo => current date
If any of the criterion is not fulfilled PromoactonCode is not used.
{/ADD}

If GlobalParameter.SubventionsPerCommodityType = False then

	
- Calculate Subvention Amount according to rules defined below, use only SubventionDefinition definitions where CommodityType is NOT defined.

Else
// Subventions by Commodity Type

	
- Make CommodityTypeGroups of Commodities entered in product calculator by Commodity.CommodityType.
	
- For each CommodityTypeGroup
- Calculate CommodityTypeGroup.Price as sum of Commodity.Price in CommodityTypeGroup.
// find partner subvention
- Find SubventionDefinition where SubventionDefinition.CommodityType = CommodityTypeGroup.CommodityType and SubventionDefinition.ModelCode = ModelGroup.ModelCode and SubventionDefinition.Participant = P (Partner)
- If not found then find SubventionDefinition where SubventionDefinition.CommodityType = CommodityTypeGroup.CommodityType and SubventionDefinition.ModelCode is NOT defined and SubventionDefinition.Participant = P (Partner)
- If not found then find SubventionDefinition where SubventionDefinition.CommodityType is NOT defined and SubventionDefinition.Participant = P (Partner)

// find manufacturer subvention
- Find SubventionDefinition where SubventionDefinition.CommodityType = CommodityTypeGroup.CommodityType and SubventionDefinition.ModelCode = ModelGroup.ModelCode and SubventionDefinition.Participant = M (Manufacturer)
- If not found then find SubventionDefinition where SubventionDefinition.CommodityType = CommodityTypeGroup.CommodityType and SubventionDefinition.ModelCode is NOT defined and SubventionDefinition.Participant = M (Manufacturer)
- If not found then find SubventionDefinition where SubventionDefinition.CommodityType is NOT defined and SubventionDefinition.Participant = M (Manufacturer)

// find home credit subvention
- Find SubventionDefinition where SubventionDefinition.CommodityType = CommodityTypeGroup.CommodityType and SubventionDefinition.ModelCode = ModelGroup.ModelCode and SubventionDefinition.Participant = HC (Home Credit)
- If not found then find SubventionDefinition where SubventionDefinition.CommodityType = CommodityTypeGroup.CommodityType and SubventionDefinition.ModelCode is NOT defined and SubventionDefinition.Participant = HC (Home Credit)
- If not found then find SubventionDefinition where SubventionDefinition.CommodityType is NOT defined and SubventionDefinition.Participant = HC (Home Credit)

{ADD PCG-4742}
// filter subvention
Check found subvention if matches criterions:
- if SubventionDefinition.MinGoodsPrice is defined then SubventionDefinition.MinGoodsPrice <= GoodsPrice
- if SubventionDefinition.MaxGoodsPrice is defined then SubventionDefinition.MaxGoodsPrice => GoodsPrice
- if SubventionDefinition.MinCommodityPrice is defined then SubventionDefinition.MinCommodityPrice <= CommodityTypeGroup.Price
- if SubventionDefinition.MaxCommodityPrice is defined then SubventionDefinition.MaxCommodityPrice => CommodityTypeGroup.Price
- if SubventionDefinition.PromoActionCode is defined then SubventionDefinition.PromoActionCode = PromoActionCode
If any criterion is not fulfilled remove the SubventionDefinition from the list
{/ADD}
Use all found SubventionDefinition for calculation of Partner/Manufacturer/Home Credit Subvention Amount for particular CommodityTypeGroup in structure defined below
	
- Continue with the next CommodityTypeGroup
	
- {ADD PCG-4742} If GlobalParameter.UseHighestDiscoutOnly (CALC_USE_HIGHEST_DISCOUNT_ONLY) = true then select from all found subventionDefinition where SubventionDefinition.Discount = true only the SubventionDefinition with highest value calculated.{/ADD}



After all parts of Subvention per CommodityType are calculated then for offer calculation use the sum of each part without reflection of Commodity Type where Subvention.Purpose = STANDARD, 
e.g. SMA = SMA(CommodityType1) + SMA(CommodityType2) + SMA(no CommodityType).

// Rules for calculation of subventions and its parts

The total amount of subvention (SXA) has two parts:

	
- SFA – fix amount of subvention


	
- SPA – percentage-based amount of subvention

The percentage part is calculated as:

	
- SP – percentage of subvention
	
- SPB – percentage base of subvention
	
- SPRT – rounding type
	
- SPRS – rounding scale of percentage subvention
	
- SPA = (SP * SPB) rounded by SPRT and SPRS


Then total amount of subvention: SA = (SFA + SPA)

Effect of subvention to client's loan (SAC):

	
- SAF – allocation factor of subvention (from 0 up to 1) (Subvention.AllocationToClient)
0 means the highest yield for HomeCredit
1 means the highest decreasing of loan amount for client.
	
- SAC = SA * SAF


Subvention paid by Manufacturer is calculated according to the rule defined above with parameters of Product.Subvention where Participant = M (Manufacturer). It is in following structure:

	
- SMA - total amount of subvention paid by manufacturer
	
- SMAC - total amount of subvention allocated to client paid by manufacturer
	
- SMAD - discount to total price (decreasing of loan amount) paid by manufacturer
	
- If Product.Subvention.Discount = true then SMAD = SMAC else SMAD= 0


Subvention paid by Partner is calculated according to the rule defined above with parameters of Product.Subvention where Participant = P (Partner). It is in following structure:

	
- SPA - total amount of subvention paid by partner
	
- SPAC - total amount of subvention allocated to client paid by partner
	
- SPAD - discount to total price (decreasing of loan amount) paid by partner
	
- If Product.Subvention.Discount = true then SPAD = SPAC else SPAD= 0


Subvention paid by Home Credit is calculated according to the rule defined above with parameters of Product.Subvention where Participant = HC (Home Credit). It is in following structure:

	
- SHCA - total amount of subvention paid by home credit
	
- SHCAC - total amount of subvention allocated to client paid by home credit
	
- SHCAD - discount to total price (decreasing of loan amount) paid by home credit
	
- If Product.Subvention.Discount = true then SHCAD = SHCAC else SHCAD= 0


If Product offer is evaluated and any subvention allocated to client cannot be calculated because value of the required percentage base is not available in the time of calculation, the offer is evaluated as invalid.
If Product.Subvention.Discount = true and SPB <> GP (Goods Price), the offer is evaluated as invalid.

## 🔗 Connections (7)

- ← Dependency: [[{DEL}Evaluation of Product Offers]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]
- ← Dependency: [[{MOD}Annuity base amount definition]]
- ← Dependency: [[Subvention Discount definition]]
- ← Dependency: [[{DEL}Calculated flat rate and cash payment (CFR_CP)]]
- ← Dependency: [[{ADD}Annuity base without Insurance]]
- ← Dependency: [[Recalculate Annuity in OFP]]

## 📊 Appears In (4 diagrams)

- Custom: Annuity calculations
- Custom: Evaluation of Products based on Financing Scheme
- Custom: Financial calculations without insurance
- Custom: Subvention calculation
