---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820042
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateOfferToApplicationAndEvaluateFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 🔗 Connections (3)

- → Dependency: [[UpdateOfferToApplicationAndEvaluateResultCode (Enumeration 1820079)]]
- → Dependency: [[ValidationError (Class 1820125)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - UpdateOfferToApplicationAndEvaluate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | UpdateOfferToApplicationAndEvaluateResultCode |  |
| validationErrors | ValidationError |  |
