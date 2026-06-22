---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819789
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Contact

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Contact of any type of person.

## 🔗 Connections (6)

- → Dependency: [[ContactRole (Enumeration 1819800)]]
- ← Dependency: [[Person (Class 1819806)]]
- ← Dependency: [[Employment (Class 1819762)]]
- ← Dependency: [[Application (Class 1819757)]]
- ← Dependency: [[PersonInformation]]
- ← Dependency: [[{MOD}ClientData (Class 1819736)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contactTypeCode | string |  |
| priority | long |  |
| value | string |  |
| note | string |  |
| extension | string |  |
| contactTypeRole | ContactRole |  |
| ownership | string |  |
| contactId | string |  |
| verificationUUID | string |  |
