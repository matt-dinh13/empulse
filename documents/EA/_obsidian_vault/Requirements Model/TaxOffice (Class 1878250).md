---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration"
domain: "Requirements Model"
element_id: 1878250
diagrams: 5
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 TaxOffice

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration

## 📝 Notes

Information about tax office.

Data get by calling India external web service.

## 🔗 Connections (1)

- ← Dependency «use»: [[AddressType (Class 1878263)]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-8484 GSTCalculatorService direct integration
- Custom: LOR-9063 - Remove temporary switch useDirectGstIntegration
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| address | string |  |
| stateCode | string |  |
| identifier | string |  |
