---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820031
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PrepareDocumentationResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Documents have been generated correctly.

## 🔗 Connections (3)

- → Dependency: [[PrintDataSource]]
- → Dependency: [[PreparedDocument (Class 1820114)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - PrepareDocumentation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documents | PreparedDocument |  |
| validUntil | date |  |
| printDataSource | PrintDataSource |  |
