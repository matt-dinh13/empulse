---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819723
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAgreementResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Response for successfully got agreement documentation of respective application.

## 🔗 Connections (3)

- → Dependency: [[PreparedDocuments (Class 1819756)]]
- → Dependency: [[PrintoutDataSources (Class 1819763)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - GetAgreement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documents | PreparedDocuments |  |
| printoutDataSources | PrintoutDataSources |  |
| validUntil | date |  |
