---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1878994
diagrams: 7
connections: 8
tags:
  - requirement
  - modules
---

# 📋 {MOD}Get Commodity Data Enabled For Update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

//This algorithm gets commodity attributes enabled for update with respect to UpdateMode

Input:
- CommodityDataValues (for list see Commodity )
- UpdateMode

Output:
- set of values EnabledForUpdate.XXX where XXX is name of commodity attribute
- set of field setting

If value of EnabledForUpdate.XXX is once set to False then it is final value (cannot be changed to True in any following rule).

Initial setting of values EnabledForUpdate.XXX is controlled by customization parameters (see parameter EnabledForUpdate in Commodity Data EnabledForUpdate Parameters).

COMMON for all UpdateModes
//Reflection of Commodity Type flags

{ADD PCG-5214}
For VN only: Checks for commodityTypeFlag are done only if commodityTypeCode is filled on commodity
{/ADD}

If Commodity.CommodityType.CommodityTypeFlag.IS_VEHICLE = False then 
- EnabledForUpdate.EngineNumber = False
- EnabledForUpdate.LicensePlateNumber = False
- EnabledForUpdate.OwnershipBookNumber = False
- EnabledForUpdate.VehicleRegistrationNumber = False
- EnabledForUpdate.VehicleRegistrationExpirationDate = False
- EnabledForUpdate.Year = False

If Commodity.CommodityType.CommodityTypeFlag.IMEI = False then 
- EnabledForUpdate.IMEI = False

If Commodity.CommodityType.CommodityTypeFlag.SKU = False then 
- EnabledForUpdate.SKU = False

If Commodity.CommodityType.CommodityTypeFlag.MSISDN = False then 
- EnabledForUpdate.MSISDN = False

If Commodity.CommodityType.CommodityTypeFlag.WITH_DELIVERY = False then 
- EnabledForUpdate.DeliveryTypeCode = False
- EnabledForUpdate.DeliveryTypeName = False

If Commodity.CommodityType.CommodityTypeFlag.VALIDATION_SKIPPABLE = False then
- EnableForUpdate.SkippValidation = False

If Commodity.CommodityType.CommodityTypeFlag.DEVICE_APP = False then
- EnableForUpdate.DeviceApp = False

If (EnableForUpdate.IMEI = False and EnableForUpdateSerialNumber = False) or (Commodity.IMEI is empty and Commodity.SerialNumber is empty) then
- EnableForUpdate.Scanned = False


//Reflection of attributes  *Disabled
If Commodity.SKUDisabled = True then
- EnabledForUpdate.ModelNumber = False
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False
- EnabledForUpdate.SKU = False

If Commodity.ProducerDisabled = True then
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False

//End of COMMON

If UpdateMode = NO_RESTRICTION then
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False
- EnabledForUpdate.DeliveryTypeCode = False
- EnabledForUpdate.DeliveryTypeName = False
//End of NO_RESTRICTION

If UpdateMode = WITH_RESTRICTION then
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False
- EnabledForUpdate.ModelNumber = False
- EnabledForUpdate.ColorCode = False
- EnabledForUpdate.ColorName = False
- EnabledForUpdate.EngineNumber = False
- EnabledForUpdate.LicensePlateNumber = False
- EnabledForUpdate.OwnershipBookNumber = False
- EnabledForUpdate.VehicleRegistrationNumber = False
- EnabledForUpdate.VehicleRegistrationExpirationDate = False
- EnabledForUpdate.DeliveryTypeCode = False
- EnabledForUpdate.DeliveryTypeName = False
- EnabledForUpdate.Year = False
//End of WITH_RESTRICTION

If UpdateMode = WITH_RESTRICTION_VEHICLE and Commodity.CommodityType.CommodityTypeFlag.IS_VEHICLE = False then
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False
- EnabledForUpdate.ModelNumber = False
- EnabledForUpdate.ColorCode = False
- EnabledForUpdate.ColorName = False
- EnabledForUpdate.DeliveryTypeCode = False
- EnabledForUpdate.DeliveryTypeName = False
If Commodity.CommodityType.CommodityTypeFlag.IS_VEHICLE = True, all EnabledForUpdate.XXX parameters are set to False.
//End of WITH_RESTRICTION_VEHICLE

If UpdateMode = APPLICATION_FORM then
- EnabledForUpdate.SKU = False
//End of APPLICATION_FORM

If UpdateMode = APPLICATION_FORM_SAVE then
// End of APPLICATION_FORM_SAVE

If UpdateMode = COMMODITY_VALIDATED then
If Commodity.Validated = True then
- EnabledForUpdate.IMEI = False
- EnabledForUpdate.SerialNumber = False
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False
- EnabledForUpdate.DeliveryTypeCode = False
- EnabledForUpdate.DeliveryTypeName = False
- EnabledForUpdate.validationSkipper = False
If Commodity.Validated = False then
- EnabledForUpdate.ProducerCode = False
- EnabledForUpdate.ProducerName = False
- EnabledForUpdate.DeliveryTypeCode = False
- EnabledForUpdate.DeliveryTypeName = False
//End of COMMODITY_VALIDATED

// commodity type field settings
System finds all commodity field setting from Commodity type field settings where commodityTypeFieldSettings.commodityType = commodityDataValues.commodityField and commodityTypeFieldSettings.updateMode = UpdateMode
For each commodity field setting found return
attributeCode = commodityTypeFieldSettings.attributeCode
fieldSettingType = commodityTypeFieldSettings.fieldSettingType

## 🔗 Connections (7)

- ← Dependency: [[{DEL}CommodityDataEnabledForUpdate]]
- ← Dependency: [[{DEL}CommodityDataRequest - validation rules]]
- ← Dependency: [[{MOD}Commodity - validation]]
- ← Dependency: [[GET Commodity for update]]
- → Dependency: [[{MOD}Commodity Data EnabledForUpdate Parameters]]
- → Dependency: [[Commodity Type Flag]]
- ← Dependency: [[{DEL}01.691 Provide commodity data for update from external systems]]

## 📊 Appears In (7 diagrams)

- Custom: Business Rules
- Custom: CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)
- Custom: Commodity Data Customization
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Custom: Validation Rules
- Use Case: {DEL}Manage commodity data from external systems
- Use Case: Use Case
