---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820030
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

It creates the application, performs the client identification in CIF and sends the application to LAP for evaluation.

## 🔗 Connections (3)

- → Dependency: [[Application (Class 1820110)]]
- → Dependency: [[ProcessType (Enumeration 1820072)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - CreateApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| application | Application |  |
| customerOfferCode | string |  |
| customerOfferRelipCode | string |  |
| processType | ProcessType |  |
