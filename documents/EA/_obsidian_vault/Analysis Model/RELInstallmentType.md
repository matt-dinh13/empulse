---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821428
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 RELInstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Basic information about REL installment. This data source is filled only for REL (product type) contracts.

## 🔗 Connections (1)

- → Association: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - financial data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| InstallmentCalculationBase | string |  |
| InstallmentRate | decimal |  |
| MinimalInstallmentSum | decimal |  |
