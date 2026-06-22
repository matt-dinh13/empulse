---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768196
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefinancedContract

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Entity holding full data about the refinanced contract.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}ApplicationDetail]]
- → Generalization «XSDextension»: [[RefinancedContractBase]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| refinancedContractId | string |  |
| contractSignDate | date |  |
| paymentChannelId | int |  |
