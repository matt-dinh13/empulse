---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607543
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ContractCommodityDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

{ADD CLM-2132 /}
Data is get as follow:

	
- call GetCommodityDataRequest via CommodityWS.GetCommodityData method with parameter:

- commodity.commodityID = Contract -> Contract2Commodity.commodityID

	
- call GetCommodityTypeDataRequest via CommodityWS.GetCommodityTypeData method with parameter: code = GetCommodityDataResponse.getCommodityDataResult -> data.commodityTypeCode

## 🔗 Connections (1)

- ← Dependency: [[ContractDataDto (Class 1607545)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| typeName | string |  |
| producerCode | string |  |
| producerDetail | string |  |
