---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes"
domain: "Requirements Model"
element_id: 1364681
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - update CommodityWS.UpdateCommodityData - add financing package attribute if defined in fin.parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes

## 📝 Notes

Whenever calling the CommodityWS.UpdateCommodityData method and a financing package is defined in financing parameters, newly provide the respective financing package code within the UpdateCommodityDataRequest in order to allow the Commodity module to properly validate the application commodities.

Shared UC01.650 updated by LOR team (LOR-3603).

No development needed from CLM side.

## 🔗 Connections (1)

- → InformationFlow: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes
