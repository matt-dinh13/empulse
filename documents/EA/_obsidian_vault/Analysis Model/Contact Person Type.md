---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner"
domain: "Analysis Model"
element_id: 1279514
diagrams: 2
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 Contact Person Type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner

## 📝 Notes

This data is used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (9)

- → Dependency: [[Person (Class 1686140)]]
- → Dependency: [[Partner Person]]
- → Dependency: [[Person (Class 1686140)]]
- → Dependency: [[Partner Person]]
- → Dependency: [[Person (Class 1686140)]]
- → Dependency: [[Salesroom Person]]
- → Dependency: [[Salesroom Person]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| First Name | string |  |
| Last Name | string |  |
| Middle Name | string |  |
| Registration date | date |  |
| Category | Text |  |
