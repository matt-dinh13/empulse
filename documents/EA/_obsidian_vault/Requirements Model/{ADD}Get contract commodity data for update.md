---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1878440
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Get contract commodity data for update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

{ADD CLM-3768/}
This object describes the steps, how system gets the data for updating the selected commodity (or multiple commodities).

Input:
- CommodityID [1..n] = unique identifier of the commodity
- UpdateMode = mode to be used for the commodity update

Output:
- CommodityForUpdate [0..n] = object of respective commodity for update
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps


Steps:

	
- System takes the UpdateMode as well as each CommodityID from the input and gets the data about the corresponding commodity by calling the respective REST API provided by the Commodity module (i.e. getCommoditiesForUpdate) with following input parameters:
        - codes = CommodityID
        - update_mode = UpdateMode
If calling the service fails due to any reason or no commodity-for-update is returned in the response, algorithm ends with no CommodityForUpdate and respective ErrorCode returned on the output.
	
- System takes each received CommodityForUpdate from the response and returns them to the calling object. Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
