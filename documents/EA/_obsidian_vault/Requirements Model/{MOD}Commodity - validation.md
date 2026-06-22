---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)"
domain: "Requirements Model"
element_id: 1852299
diagrams: 4
connections: 15
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Commodity - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)

## 📝 Notes

GET commodity
CommoditySearchCriteria

	
- at least one search criteria need to be filled [INVALID_SEARCH_CRITERIA]


code

	
- must exist in commodity.commodityId


POST commodity

	
- colorCode
must exist in list of codes obtained by Get codelists from CSD with parameter color [INVALID_COLOR]
	
- IMEI
is in correct format according to rule IMEI validation [INVALID_IMEI]


	
- MSISDN
is in correct format according to rule  MSISDN validation [INVALID_MSISDN]


	
- producerCode
must exists in codes obtained by Get list of Manufacturers [PRODUCER_NOT_FOUND]


	
- year
between 1900 and current year [INVALID_YEAR]


	
- commodityTypeCode
mandatory [REQUIRED]
exists in commodityType.code [COMMODITY_TYPE_NOT_FOUND]
{ADD PCG-5214}only for VN: optional{/ADD}


	
- deliveryTypeCode
must exist in list of codes obtained by Get codelists from CSD with parameter delivery_type [INVALID_DELIVERY_TYPE]


	
- price
mandatory [REQUIRED]
higher than zero [INVALID_NUMBER]
	
- priceWithoutTax
mandatory [REQUIRED]
higher than zero [INVALID_NUMBER]
lower than price [INVALID_NUMBER]
	
- currency
exists in currency.code [INVALID_CURRENCY]


	
- status
exists in Commodity Status
must fulfill transition order according Commodity status lifecycle : Commodity status lifecycle [INVALID_TRANSITION]
if not filled set to DRAFT
	
- modelNumber
only one of modelNumber or modelCode can be filled [MODEL_NUMBER_NOT_ALLOWED]
max length 50
must fulfill pattern - "\\S++(?: ?\\S++)*+" - first and last character must be non-white character, no more than one space in sequence (can not contain two spaces next to each other) [PATTERN_NOT_MATCH]
	
- modelCode
only one of modelNumber or modelCode can be filled
exists in codes obtained by Get list of Models [MODEL_NOT_FOUND]
	
- description
max length 255 [MAX_LENGTH]
{ADD PCG-4836}only for VN: max length 512{/ADD}
	
- deviceApp
must exist in Device App 
can be filled only when commodity.CommodityType.flagType = DEVICE_APP
	
- scanned
can be filled only when commodity.IMEI or commodity.SerialNumber is filled
	
- quoteId
max length 30 [MAX_LENGTH]
	
- imeiChannel
max length 30 [MAX_LENGTH]
for country: VN
	
- {ADD PCG-5214}sku
only for VN: max length 32
	
- categoryId
max length 128
for country: VN
	
- categoryName
max length 256
for country: VN
{/ADD}


PUT commodity

	
- code
mandatory
must exist in commodity.commodityId [INVALID_COMMODITY_ID]


	
- updateMode
exists in UpdateMode
	
- eventType
exists in Commodity Validation Event Type
	
- If Commodity module Application properties.skip-commodity-validation-on-update = true and commodity.ValidationSkipped = true then do not validate commodity
else commodity validation can be performed according to rule Commodity Validation algorithm with parameters:
- CommodityValidationDto.commodityId
- CommodityValidationDto.validationParametersDto.eventType
- CommodityValidationDto.validationParametersDto.productCode
- CommodityValidationDto.validationParametersDto.insuranceServiceCode
- CommodityValidationDto.validationParametersDto.financingPackageCode
[VALIDATION_ERROR]


	
- colorCode
must exist in list of codes obtained by Get codelists from CSD with parameter color [INVALID_COLOR]
	
- IMEI
is in correct format according to rule IMEI validation [INVALID_IMEI]


	
- MSISDN
is in correct format according to rule  MSISDN validation [INVALID_MSISDN]


	
- producerCode
must exists in codes obtained by Get list of Manufacturers [PRODUCER_NOT_FOUND]


	
- year
between 1900 and current year [INVALID_YEAR]


	
- All changed values from commodityUpdate.commodity can be edited according to rule Get Commodity Data Enabled For Update with parameters:
- commodityUpdate.commodity.code
- commodityUpdate.commodity.updateMode
[NOT_EDITABLE]
	
- All attributes from commodityUpdate.commodity must be filled for commodityFieldSetting.attributeCode where commodityFieldSetting.fieldSettingType = MANDATORY [REQUIRED]


	
- validationSkipped
Can be set to true only when commodity.CommodityType.flagType = VALIDATION_SKIPPABLE [UNSKIPPABLE_COMMODITY_TYPE]
Can be set to true only when commodity.validated = false [UNSKIPPABLE_ALREADY_VALIDATED]


	
- status
exists in Commodity Status
must fulfill transition order according Commodity status lifecycle : Commodity status lifecycle [INVALID_TRANSITION]


	
- modelNumber
only one of modelNumber or modelCode can be filled [MODEL_NUMBER_NOT_ALLOWED]
max length 50
must fulfill pattern - "\\S++(?: ?\\S++)*+" - first and last character must be non-white character, no more than one space in sequence (can not contain two spaces next to each other) [PATTERN_NOT_MATCH]


	
- modelCode
only one of modelNumber or modelCode can be filled
exists in codes obtained by Get list of Models [MODEL_NOT_FOUND]
	
- description
max length 255 [MAX_LENGTH]
{ADD PCG-4836}only for VN: max length 512{/ADD}
	
- deviceApp
must exist in Device App
	
- scanned
can be filled only when commodity.IMEI or commodity.SerialNumber is filled


	
- quoteId
max length 30 [MAX_LENGTH]
	
- imeiChannel
max length 30 [MAX_LENGTH]
for country: VN


	
- {ADD PCG-5214}sku
only for VN: max length 32
	
- categoryId
max length 128
for country: VN


	
- categoryName
max length 256
for country: VN
{/ADD}


DELETE commodity

	
- codes
commodity code needs to exists in Commodity


DELETE commodity DeleteCommodityDto 

	
- commodityCode
required
commodity code needs to exists in Commodity


	
- salesroomCode
required
must exists in salesroom obtained via Get salesroom from HomeSIS

## 🔗 Connections (13)

- → Dependency: [[Get codelists from CSD]]
- → Dependency: [[IMEI validation]]
- → Dependency: [[{MOD}Get Commodity Data Enabled For Update]]
- → Dependency: [[Commodity Validation algorithm]]
- → Dependency: [[{ADD}Get list of Manufacturers]]
- → Dependency: [[{ADD}Get list of Models]]
- → Dependency: [[{ADD}Get salesroom from HomeSIS]]
- → Dependency: [[{ADD}MSISDN validation]]
- ← Dependency: [[DELETE Commodity]]
- ← Dependency: [[GET Commodity for update]]
- ← Dependency: [[PUT Commodity]]
- ← Dependency: [[POST Commodity]]
- ← Dependency: [[GET Commodity]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)
- Custom: PCG-4746 CBL-24598 [SUBVENTION] UPDATE OPPO IMEI VALIDATION INFORMATION
- Custom: Validation Rules
- Use Case: Use Case
