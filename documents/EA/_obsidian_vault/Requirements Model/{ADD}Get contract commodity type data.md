---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1878457
diagrams: 2
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Get contract commodity type data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

{ADD CLM-3768/}
This object describes the steps, how system gets the data about the selected commodity type (or multiple commodity types).

Input:
- CommodityTypeCode [1..n] = code of the commodity type

Output:
- CommodityType [0..n] = object of respective commodity type
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps


Steps:

	
- System takes each CommodityTypeCode from the input and gets the data about the corresponding commodity type by calling the respective REST API provided by the Commodity module (i.e getCommodityTypes) with following input parameters:
        - codes = CommodityTypeCode
If calling the service fails due to any reason or no commodity type is returned in the response, algorithm ends with no CommodityType and respective ErrorCode returned on the output.
	
- System takes each received CommodityType from the response and returns them to the calling object. Algorithm ends.

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
