---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8118 (CLM-2620) Change Model as Mandatory Field in BSL"
domain: "Requirements Model"
element_id: 1486429
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - extension of commodity validations on the Contract detail -> Commodity tab

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8118 (CLM-2620) Change Model as Mandatory Field in BSL

## 📝 Notes

The validation rules is taken from Commodity module (it will keep all definitions) before the commodity data update and it is used for UI validation before sending updated data to the Commodity module.
Also check for used characters for Model attribute is added (ID specific).

New version 15 of CommodityWS has to be used with new attributes for:

	
- GetCommodityDataUpdate - ResulCommodityData extended by CommodityFieldSetting
	
- UpdateCommodityData - ResultCodeUpdate extended by new enum MISSING_MANDATORY_FIELD

## 📊 Appears In (1 diagrams)

- Custom: CBL-8118 (CLM-2620) Change Model as Mandatory Field in BSL
