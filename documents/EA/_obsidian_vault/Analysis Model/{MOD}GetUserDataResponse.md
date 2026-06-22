---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization"
domain: "Analysis Model"
element_id: 923382
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}GetUserDataResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization

## 📝 Notes

This data type defines output of the ProvideSnmDataWS where is expected data of User and his supervisors.

## 🔗 Connections (3)

- → Dependency: [[User Type]]
- → Dependency: [[User Type]]
- ← Dependency «use»: [[ProvideSnmDataWS]]

## 📊 Appears In (2 diagrams)

- Logical: Consumed Web service ProvideSNMDataWS
- Logical: SNM User Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | User Type |  |
| supervisor | User Type |  |
