---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768162
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateAndEvaluateApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Operation fail

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1768263)]]
- → Dependency: [[CreateAndEvaluateApplicationResultCode]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - CreateAndEvaluateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CreateApplicationResultCode |  |
| validationErrors | ValidationError |  |
