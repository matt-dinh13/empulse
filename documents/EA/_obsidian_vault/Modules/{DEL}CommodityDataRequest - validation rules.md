---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1746310
diagrams: 1
connections: 10
tags:
  - requirement
  - modules
---

# 📋 {DEL}CommodityDataRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

{DEL PCG-3924/}
// Validation of Requests for methods of CommodityWS
// returned resultCode code is in bracket

ComplexType = GetCommodityData, GetCommodityDataForUpdate, UpdateCommodityData, ValidateCommodityData, ArchiveCommodityData

	
- CommodityID
Mandatory
Exists Commodity where ComplexType.commodityId = CommodityID [INVALID_COMMODITY_ID]


ComplexType = GetCommodityDataForUpdate, UpdateCommodityData

	
- UpdateMode
Exists UpdateMode where ComplexType.updateMode = UpdateMode [INVALID_UPDATE_MODE]


ComplexType = {DEL PCG-2437} UpdateCommodityData,{/DEL} ValidateCommodityData 

	
- EventType
Exists EventType where ComplexType.validationParameters.eventType = EventType [INVALID_EVENT_TYPE]


	
- Commodity validation can be performed according to rule Commodity Validation algorithm with parameters:
- ComplexType.commodityId
- ComplexType.validationParameters.eventType
- ComplexType.validationParameters.productCode
- ComplexType.validationParameters.insuranceServiceCode
- ComplexType.validationParameters.financingPackageCode
[VALIDATION_ERROR]


{ADD PCG-2437}
ComplexType = UpdateCommodityData

	
- EventType
Exists EventType where ComplexType.validationParameters.eventType = EventType [INVALID_EVENT_TYPE]


	
- If globalParameter.CommodityValidationSkipOnUpdate (PCG_COM_VAL_SKIP_ON_UPDATE) = true and commodity.ValidationSkipped = true then do not validate commodity
else Commodity validation can be performed according to rule Commodity Validation algorithm with parameters:
- ComplexType.commodityId
- ComplexType.validationParameters.eventType
- ComplexType.validationParameters.productCode
- ComplexType.validationParameters.insuranceServiceCode
- ComplexType.validationParameters.financingPackageCode
[VALIDATION_ERROR]

{/ADD}

ComplexType = UpdateCommodityData, CreateCommodityData 

	
- ColorCode
Exists Color where ComplexType.CommodityDataValues.colorCode = ColorCode [INVALID_COLOR_CODE]


	
- IMEI
ComplexType.CommodityDataValues.IMEI is in correct format according to rule IMEI validation [INVALID_IMEI]


	
- MSISDN
ComplexType.CommodityDataValues.MSISDN is in correct format according to rule MSISDN validation [INVALID_MSISDN]


	
- ProducerCode
Exists Manufacturer where ComplexType.CommodityDataValues.producerCode = ProducerCode [INVALID_PRODUCER]


	
- Model
Model = ComplexType.CommodityDataValues.Model
a) Length of Model <= 50
b) Model contains only allowed characters/combinations:
- ASCII 32 is not allowed on the first position
- two or more successive ASCII 32 are forbidden
[INVALID_MODEL]
	
- validationSkipped
Can be set to true only when commodity.CommodityType.flagType = VALIDATION_SKIPPABLE [UNSKIPPABLE_COMMODITY_TYPE]
Can be set to true only when commodity.validated = false [UNSKIPPABLE_ALREADY_VALIDATED]
	
- warranty
Must be => 0 [INVALID_WARRANTY]
	
- year
between 1900 and current year [INVALID_YEAR]


ComplexType = UpdateCommodityData

	
- All changed values from ComplexType.CommodityDataValues can be edited according to rule Get Commodity Data Enabled For Update with parameters:
- ComplexType.commodityId
- ComplexType.updateMode
[DATA_NOT_EDITABLE]
	
- All attributes from ComplexType.CommodityDataValues must be filled for commodityFieldSetting.attributeCode where commodityFieldSetting.fieldSettingType = MANDATORY [MANDATORY_ATTRIBUTE_MISSING]


ComplexType = ValidateCommodityData

	
- Commodity.Validated = True where Commodity = ComplexType.commodityId [ALREADY_VALIDATED]


ComplexType = CreateCommodityData 

	
- CommodityTypeCode
Mandatory
Exists CommodityType where ComplexType.CommodityDataValues.commodityTypeCode = CommodityTypeCode [INVALID_COMMODITY_TYPE]
	
- DeliveryTypeCode
Exists CommodityDeliveryType where ComplexType.CommodityDataValues.deliveryTypeCode = DeliveryTypeCode [INVALID_DELIVERY_TYPE]
	
- Price
Mandatory 
Higher than zero
Exists Currency.Code where ComplexType.CommodityDataValues.price.currency = Price [INVALID_PRICE]
	
- PriceWithoutTax
Mandatory 
Higher than zero
Exists Currency.Code where ComplexType.CommodityDataValues.priceWithoutTax.currency = PriceWithoutTax [INVALID_PRICE]

## 🔗 Connections (10)

- → Dependency: [[IMEI validation]]
- → Dependency: [[{ADD}MSISDN validation]]
- → Dependency: [[{MOD}Get Commodity Data Enabled For Update]]
- → Dependency: [[Commodity Validation algorithm]]
- ← Dependency: [[{DEL}01.691 Provide commodity data for update from external systems]]
- ← Dependency: [[{DEL}01.697 Archive commodity data from external systems]]
- ← Dependency: [[{DEL}01.693 Validate commodity data from external systems]]
- ← Dependency: [[{DEL}01.694 Create commodity data from external systems]]
- ← Dependency: [[{DEL}01.690 Provide commodity data for external systems]]
- ← Dependency: [[{DEL}01.692 Update commodity data from external systems]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Manage commodity data from external systems
