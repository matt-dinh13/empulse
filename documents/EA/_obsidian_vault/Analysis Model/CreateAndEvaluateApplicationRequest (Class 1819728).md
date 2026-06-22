---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819728
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CreateAndEvaluateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

It creates the application, performs the client identification in CIF and sends the application to LAP for evaluation.

## 🔗 Connections (4)

- → Generalization «XSDextension»: [[RequestBase (Class 1822196)]]
- → Dependency: [[Application (Class 1819757)]]
- → Dependency: [[ProcessType (Enumeration 1819742)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - CreateAndEvaluateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| application | Application |  |
| customerOfferCode | string |  |
| customerOfferRelipCode | string |  |
| processType | ProcessType |  |
