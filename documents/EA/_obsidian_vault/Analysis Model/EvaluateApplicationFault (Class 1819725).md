---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819725
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 EvaluateApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1819729)]]
- → Dependency: [[EvaluateApplicationResultCode (Enumeration 1819739)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - EvaluateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | EvaluateApplicationResultCode |  |
| validationErrors | ValidationError |  |
