---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821429
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CommodityType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Data of individual commodity associated with the processed contract.

Values of individual sub-elements are retrieved as follows:

	
- Commodity data are retrieved according to the rule Get application commodity data with Contract->Contract_2_Commodity.Commodity_ID as CommodityID on the input.
	
- Commodity category and commodity type are retrieved according to the rule Get application commodity type data with CommodityTypeCode (returned within the previous step) on the input.

## 🔗 Connections (3)

- → Dependency: [[Get application commodity type data]]
- → Dependency: [[Get application commodity data]]
- ← Dependency «use»: [[CommoditiesType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| category | string |  |
| type | string |  |
| price | MoneyType |  |
| color | string |  |
| deliveryType | string |  |
| modelNumber | string |  |
| serialNumber | string |  |
| engineNumber | string |  |
| producer | string |  |
| yearManufactured | string |  |
| ownershipBookNumber | string |  |
| vehicleRegistrationNumber | string |  |
| vehicleRegistrationExpirationDate | dateTime |  |
| licencePlateNumber | string |  |
| commodityName | string |  |
| IMEI | string |  |
| MSISDN | string |  |
| year | string |  |
| description | string |  |
