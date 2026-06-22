---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization"
domain: "Analysis Model"
element_id: 1279513
diagrams: 3
connections: 19
tags:
  - class
  - analysis-model
---

# 🔷 Address Type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization

## 📝 Notes

This data is used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (19)

- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Salesroom Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Partner Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- → Dependency: [[Address]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (3 diagrams)

- Logical: SNM Address Synchronization
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Block | string |  |
| Block set | string |  |
| Country | string |  |
| Flat | string |  |
| Floor | string |  |
| House number | string |  |
| Landmark | string |  |
| Locality | string |  |
| Region | KeyValueType |  |
| District | KeyValueType |  |
| Sub-district | KeyValueType |  |
| Street name | string |  |
| Town | KeyValueType |  |
| ZIP code | KeyValueType |  |
| ZIP code suffix | KeyValueType |  |
| Usage | Address Usage Type |  |
