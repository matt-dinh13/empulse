---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner"
domain: "Analysis Model"
element_id: 1279518
diagrams: 2
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Cobrand Group Type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner

## 📝 Notes

This data are used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (8)

- → Dependency: [[Partner Cobrand Group]]
- → Dependency: [[Cobrand group]]
- → Dependency: [[Salesroom Cobrand Group]]
- → Dependency: [[Partner Cobrand Group]]
- → Dependency: [[Salesroom Cobrand Group]]
- → Dependency: [[Cobrand group]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ValidFrom | date |  |
| ValidTo | date |  |
| Code | string |  |
| Name | string |  |
