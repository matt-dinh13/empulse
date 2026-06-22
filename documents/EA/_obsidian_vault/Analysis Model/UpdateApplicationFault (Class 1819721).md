---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819721
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Response in case of any validation fails.

## 🔗 Connections (3)

- → Dependency: [[UpdateApplicationResultCode (Enumeration 1819741)]]
- → Dependency: [[ValidationError (Class 1819729)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - UpdateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | UpdateApplicationResultCode |  |
| validationErrors | ValidationError |  |
