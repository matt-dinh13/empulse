---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820018
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetApplicationDataRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Request for getting of data of application.

## 🔗 Connections (2)

- → Dependency: [[ApplicationDataSet (Enumeration 1820092)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - GetApplicationData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| dataSet | ApplicationDataSet |  |
