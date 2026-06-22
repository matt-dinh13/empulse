---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768160
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAgreementResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Response for successfully got agreement documentation of respective application.

## 🔗 Connections (3)

- → Dependency: [[PrintoutDataSources]]
- → Dependency: [[PreparedDocuments]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - GetAgreement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documents | PreparedDocuments |  |
| printoutDataSources | PrintoutDataSources |  |
| validUntil | date |  |
