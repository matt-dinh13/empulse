---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN"
domain: "Analysis Model"
element_id: 1721808
diagrams: 2
connections: 12
tags:
  - requirement
  - analysis-model
---

# 📋 Get application commodity data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN

## 📝 Notes

This object describes the steps, how system gets the data about the selected commodity (or multiple commodities).

Input:
- CommodityID [1..n] = unique identifier of the commodity

Output:
- Commodity [0..n] = object of respective commodity
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps


Steps:

	
- System takes each CommodityID from the input and gets the data about the corresponding commodity as follows:
   System calls the respective REST API provided by the Commodity module (i.e. GET Commodities) with following input parameters:
        - codes = CommodityID
   
If calling the service fails due to any reason or no commodity is returned in the response, algorithm ends with no Commodity and respective ErroCode returned on the output.
	
- System takes each received Commodity from the response and returns them to the calling object. Algorithm ends.

## 🔗 Connections (12)

- ← Dependency: [[{MOD}Commodity]]
- ← Dependency: [[Commodity information]]
- → Dependency: [[commodites]]
- ← Dependency: [[Select application commodities for IMEI validation]]
- ← Dependency: [[Commodity information (GUIElement 1721954)]]
- ← Dependency: [[Commodity - product AF (GUIElement 1722002)]]
- ← Dependency: [[Commodity (Class 1755452)]]
- ← Dependency: [[{MOD}08.115 Collect insurance custom data for alternative offer]]
- ← Dependency: [[CommodityType (Class 1821429)]]
- ← Dependency: [[Application form construction]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]
- ← Dependency: [[01.040 Get application data (UseCase 1879289)]]

## 📊 Appears In (2 diagrams)

- Custom: Cross validations-VN
- Custom: Operations with application commodities
