---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768156
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CreateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

It creates the application, performs the client identification in CIF and sends the application to LAP for evaluation.

## 🔗 Connections (4)

- → Generalization: [[RequestBase (Class 1822196)]]
- → Dependency: [[{MOD}Application]]
- → Dependency: [[ProcessType]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - CreateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| application | Application |  |
| customerOfferCode | string |  |
| customerOfferRelipCode | string |  |
| processType | ProcessType |  |
