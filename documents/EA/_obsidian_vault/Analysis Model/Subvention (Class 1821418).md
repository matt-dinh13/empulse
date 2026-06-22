---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821418
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Subvention

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Data about subventions

## 🔗 Connections (3)

- → Dependency: [[GoodsAndServicesTaxItem]]
- → Usage: [[SubventionDefinition]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - financial data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| gstItem | GoodsAndServicesTaxItem |  |
| amount | MoneyType |  |
| participant | string |  |
| subventionDefiniton | SubventionDefinition |  |
