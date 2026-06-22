---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819734
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefinancedContract

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Entity holding full data about the refinanced contract.

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[RefinancedContractBase (Class 1819788)]]
- ← Dependency: [[ApplicationDetail]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| refinancedContractId | string |  |
| contractSignDate | date |  |
| paymentChannelId | int |  |
