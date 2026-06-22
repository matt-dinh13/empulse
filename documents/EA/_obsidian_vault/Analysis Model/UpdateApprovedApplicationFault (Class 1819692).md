---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819692
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApprovedApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Response in case of any validation fails.

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1819729)]]
- → Dependency: [[UpdateApprovedApplicationResultCode (Enumeration 1819765)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - UpdateApprovedApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | UpdateApprovedApplicationResultCode |  |
| validationErrors | ValidationError |  |
