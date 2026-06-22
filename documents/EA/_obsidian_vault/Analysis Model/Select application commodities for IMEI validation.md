---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN"
domain: "Analysis Model"
element_id: 1721803
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Select application commodities for IMEI validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN

## 📝 Notes

This object describes the steps, how system selects the application commodities, which are relevant for the IMEI validation.

Input:
- Commodity [1..n] = object of the application commodity

Output:
- CommodityWithIMEI [0..n] = object of the application commodity, which is relevant for the IMEI validation
- ErrorResult (optional) = indication of error result, when some technical issues occur during the performed steps


Steps:

	
- System takes each Commodity with imei from the input (i.e. Commodity[.imei is not null]) and adds it among the CommodityWithIMEI.
	
- System takes each Commodity with commodityId and no imei from the input (i.e. Commodity[.commodityId is not null AND .imei is null]) and gets its detailed data according to the rule Get application commodity data with respective identifier as CommodityID on the input. From the commodity data returned on the rule's output, system selects the commodities with non-empty IMEI (Commodity[.IMEI is not null]) and adds them among the CommodityWithIMEI.

In case of failure (i.e. when ErrorCode is returned on the rule's output), algorithm ends with no CommodityWithIMEI and respective ErrorCode returned on the output.
	
- System takes the respective CommodityWithIMEI selected within the previous steps and returns them to the calling object. Algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Get application commodity data]]
- ← Dependency: [[Application cross-validation rules - VN]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (4 diagrams)

- Custom: Cross validations-VN
- Custom: Operations with application commodities
- Use Case: Contract signing
- Use Case: Prepare documentation to sign
