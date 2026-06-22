---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820036
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SignApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

The application signature failed.

## 🔗 Connections (3)

- → Dependency: [[SignContractResultCode]]
- → Dependency: [[ValidationError (Class 1820125)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - SignApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | SignContractResultCode |  |
| validationErrors | ValidationError |  |
