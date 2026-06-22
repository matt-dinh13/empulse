---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768166
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}EvaluateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

{ADD TFT-9010/}
Code of the sales agent,  who submitted the application.

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[RequestBase (Class 1822196)]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - EvaluateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| {ADD}salesAgentCode | string |  |
