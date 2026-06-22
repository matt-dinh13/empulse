---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768171
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 EvaluateApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1768263)]]
- → Dependency: [[EvaluateApplicationResultCode]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - EvaluateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | EvaluateApplicationResultCode |  |
| validationErrors | ValidationError |  |
