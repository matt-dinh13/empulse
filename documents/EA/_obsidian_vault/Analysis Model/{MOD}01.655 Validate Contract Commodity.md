---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights"
domain: "Analysis Model"
element_id: 1852205
diagrams: 5
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.655 Validate contract Commodity

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights

## 📝 Notes

This use case describes validation of commodity on user's demand.

## 🔗 Connections (6)

- ← InformationFlow: [[REQ#1 - update CommodityWS.ValidateCommodityData - add financing package attribute if defined in fin]]
- ← Dependency: [[Validate commodity]]
- ← Dependency: [[Validate commodity (GUIElement 1721957)]]
- → Dependency: [[Validate application commodity]]
- → Realisation: [[{MOD}01.655 Validate Contract Commodity]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-4312 (CLM-1709) Commodity Validation extension for Financing Schemes
- Custom: Tab - Commodity
- Custom: Tab-Commodity
- Use Case: Manage contract commodities
