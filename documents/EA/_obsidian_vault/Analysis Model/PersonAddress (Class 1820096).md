---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820096
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PersonAddress

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 🔗 Connections (4)

- → Dependency: [[Address (Class 1820098)]]
- ← Dependency: [[PersonInformation (Class 1820119)]]
- → Dependency: [[PersonAddressType (Enumeration 1820046)]]
- ← Dependency: [[Person (Class 1820043)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| address | Address |  |
| type | PersonAddressType |  |
