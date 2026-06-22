---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820007
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApprovedApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Response in case of any validation fails.

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1820125)]]
- → Dependency: [[UpdateApprovedApplicationResultCode (Enumeration 1820122)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | UpdateApprovedApplicationResultCode |  |
| validationErrors | ValidationError |  |
