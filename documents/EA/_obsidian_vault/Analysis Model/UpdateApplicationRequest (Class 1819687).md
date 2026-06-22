---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819687
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Request to update data of pre-approved application.

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[RequestBase (Class 1822196)]]
- → Dependency: [[Application (Class 1819757)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - UpdateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| applicationData | Application |  |
