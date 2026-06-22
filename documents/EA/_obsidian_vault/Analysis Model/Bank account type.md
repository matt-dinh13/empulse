---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization"
domain: "Analysis Model"
element_id: 1279520
diagrams: 3
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Bank account type

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization

## 📝 Notes

This data is used by SalesNetworkDataSynchronizationWS.

## 🔗 Connections (7)

- → Dependency: [[Bank Account (Class 1627830)]]
- → Dependency: [[Bank Account (Class 1627830)]]
- → Dependency: [[Bank Branch (Class 1761502)]]
- → Dependency: [[Bank Account (Class 1627830)]]
- → Dependency: [[Bank Account (Class 1627830)]]
- ← Dependency «use»: [[{MOD}GetPartnerDataResponse]]
- ← Dependency «use»: [[{MOD}GetSalesroomDataResponse]]

## 📊 Appears In (3 diagrams)

- Logical: SNM Bank Account Synchronization
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Bank Branch Code | string |  |
| Bank Code | string |  |
| Number | Number |  |
| For payments | Boolean |  |
| Name | string |  |
| Usage | Bank Account Usage Type |  |
