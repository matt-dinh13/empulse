---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization"
domain: "Analysis Model"
element_id: 1279515
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 User Type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization

## 📝 Notes

This data is used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (7)

- ← Dependency: [[{MOD}GetUserDataResponse]]
- ← Dependency: [[{MOD}GetUserDataResponse]]
- → Dependency: [[User (Class 1572279)]]
- → Dependency: [[User Setting]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (4 diagrams)

- Logical: SNM General User Synchronization
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
- Logical: SNM User Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| {ADD} Group Assistant Number | int |  |
