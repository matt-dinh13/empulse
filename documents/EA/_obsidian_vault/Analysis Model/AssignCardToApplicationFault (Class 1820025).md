---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820025
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 AssignCardToApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1820125)]]
- → Dependency: [[AssignCardToApplicationResultCode (Enumeration 1820130)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - AssignCardToApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | AssignCardToApplicationResultCode |  |
| validationErrors | ValidationError |  |
