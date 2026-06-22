---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768187
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Response in case of any validation fails.

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1768263)]]
- → Dependency: [[UpdateApplicationResultCode]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - UpdateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | UpdateApplicationResultCode |  |
| validationErrors | ValidationError |  |
