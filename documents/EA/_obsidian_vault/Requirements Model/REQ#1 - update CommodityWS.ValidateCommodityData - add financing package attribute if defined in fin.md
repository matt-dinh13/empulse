---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes"
domain: "Requirements Model"
element_id: 1364655
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - update CommodityWS.ValidateCommodityData - add financing package attribute if defined in fin.parameters

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes

## 📝 Notes

Whenever calling the CommodityWS.ValidateCommodityData method and a financing package is defined in financing parameters, newly provide the respective financing package code within the ValidateCommodityDataRequest in order to allow the Commodity module to properly validate the application commodities.

Shared UC01.655 updated by LOR team (LOR-3603).
UC01.331 uses common Validation rule updated by LOR team (LOR-3603).

No development needed from CLM side.

## 🔗 Connections (2)

- → InformationFlow: [[{MOD}01.655 Validate contract Commodity]]
- → InformationFlow: [[01.331 Cancel signed contract with invalid commodity (UseCase 1850492)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes
