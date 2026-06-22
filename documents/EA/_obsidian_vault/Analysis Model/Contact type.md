---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner"
domain: "Analysis Model"
element_id: 1279519
diagrams: 2
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Contact Type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner

## 📝 Notes

This data is used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (7)

- → Dependency: [[Contact (Class 1647755)]]
- → Dependency: [[{DEL}Phone]]
- → Dependency: [[Contact Type (Class 1647754)]]
- → Dependency: [[{DEL}Phone]]
- → Dependency: [[Contact (Class 1647755)]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Category | Contact Category Type |  |
| Value1 | string |  |
| Value2 | string |  |
