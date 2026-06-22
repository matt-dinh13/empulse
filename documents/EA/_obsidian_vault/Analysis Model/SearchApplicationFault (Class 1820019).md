---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820019
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SearchApplicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

The search failed.

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Class 1820125)]]
- → Dependency: [[SearchApplicationResultCode (Enumeration 1820070)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - SearchApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | SearchApplicationResultCode |  |
| validationErrors | ValidationError |  |
