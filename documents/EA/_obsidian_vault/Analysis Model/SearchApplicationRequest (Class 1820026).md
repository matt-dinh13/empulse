---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820026
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SearchApplicationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Search applications based on criterion on the input.

## 🔗 Connections (3)

- → Dependency: [[SearchApplicationCriteria (Class 1820087)]]
- → Generalization: [[AbstractListRequest (Class 1820101)]]
- ← Dependency: [[ApplicationManagementWS_v21 (Interface 1820000)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v21 - SearchApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| criteria | SearchApplicationCriteria |  |
