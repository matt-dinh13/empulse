---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration"
domain: "Requirements Model"
element_id: 1878207
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 GoodsAndServicesTaxItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration

## 📝 Notes

Data get by calling India external web service.

## 🔗 Connections (3)

- ← Dependency: [[Subvention (Class 1821418)]]
- → Dependency «use»: [[GoodsAndServicesTax]]
- ← Dependency «use»: [[ChargedFeeType (Class 1878265)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-8484 GSTCalculatorService direct integration
- Custom: LOR-9063 - Remove temporary switch useDirectGstIntegration
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| description | string |  |
| serviceCode | string |  |
| taxes | GoodsAndServicesTax |  |
