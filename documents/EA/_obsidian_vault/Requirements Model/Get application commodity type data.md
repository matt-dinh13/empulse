---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module"
domain: "Requirements Model"
element_id: 1721806
diagrams: 2
connections: 8
tags:
  - requirement
  - requirements-model
---

# 📋 Get application commodity type data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module

## 📝 Notes

This object describes the steps, how system gets the data about the selected commodity type (or multiple commodity types).

Input:
- CommodityTypeCode [1..n] = code of the commodity type

Output:
- CommodityType [0..n] = object of respective commodity type
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps


Steps:

	
- System takes each CommodityTypeCode from the input and gets the data about the corresponding commodity type  as follows:
   System calls the respective REST API provided by the Commodity module (i.e GET Commodity-Types) with following input parameters:
        - codes = CommodityTypeCode
	
- If calling the service fails due to any reason or no commodity type is returned in the response, algorithm ends with no CommodityType and respective ErrorCode returned on the output.
	
- System takes each received CommodityType from the response and returns them to the calling object. Algorithm ends.

## 🔗 Connections (8)

- ← Dependency: [[{MOD}Commodity]]
- ← Dependency: [[Commodity information]]
- ← Dependency: [[Commodity information (GUIElement 1721954)]]
- ← Dependency: [[Edit commodity (GUIElement 1721971)]]
- ← Dependency: [[Commodity - product AF (GUIElement 1722002)]]
- ← Dependency: [[Commodity (Class 1755452)]]
- ← Dependency: [[CommodityType (Class 1821429)]]
- ← Dependency: [[{MOD}Edit commodity]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Custom: Operations with application commodities
