---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819699
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateAndEvaluateApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Operation fail

## 🔗 Connections (3)

- → Dependency: [[CreateAndEvaluateApplicationResultCode (Enumeration 1819814)]]
- → Dependency: [[ValidationError (Class 1819729)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - CreateAndEvaluateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CreateApplicationResultCode |  |
| validationErrors | ValidationError |  |
