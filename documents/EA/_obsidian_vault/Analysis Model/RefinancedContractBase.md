---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768239
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefinancedContractBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Entity holding basic data about the refinanced contract.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Application]]
- ← Generalization «XSDextension»: [[RefinancedContract (Class 1768196)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| internal | boolean |  |
| amount | decimal |  |
