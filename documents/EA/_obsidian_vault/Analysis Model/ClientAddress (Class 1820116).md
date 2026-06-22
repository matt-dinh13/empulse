---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820116
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ClientAddress

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 🔗 Connections (4)

- ← Dependency: [[Application (Class 1820110)]]
- ← Dependency: [[ClientData (Class 1820099)]]
- → Dependency: [[Address (Class 1820098)]]
- → Dependency: [[ClientAddressType (Enumeration 1820048)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| address | Address |  |
| type | ClientAddressType |  |
