---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration"
domain: "Requirements Model"
element_id: 1878257
diagrams: 4
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 GoodsAndServicesTax

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration

## 📝 Notes

Data get by calling India external web service.

## 🔗 Connections (1)

- ← Dependency «use»: [[GoodsAndServicesTaxItem]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-8484 GSTCalculatorService direct integration
- Custom: LOR-9063 - Remove temporary switch useDirectGstIntegration
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | decimal |  |
| code | string |  |
| rate | decimal |  |
