---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner"
domain: "Analysis Model"
element_id: 1279517
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Business Area Type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/Partner

## 📝 Notes

This data is used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (6)

- → Dependency: [[Business Area]]
- → Dependency: [[Business Area]]
- → Dependency: [[Sales Area]]
- → Dependency: [[Sales Area]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
