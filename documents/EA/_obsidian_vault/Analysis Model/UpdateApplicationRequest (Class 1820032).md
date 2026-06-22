---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820032
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Request to update data of pre-approved application.

## 🔗 Connections (3)

- → Dependency: [[Application (Class 1820110)]]
- → Generalization «XSDextension»: [[RequestBase (Class 1633342)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - UpdateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| applicationData | Application |  |
