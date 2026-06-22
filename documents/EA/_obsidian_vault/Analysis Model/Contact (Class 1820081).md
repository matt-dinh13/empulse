---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820081
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Contact

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 📝 Notes

Contact of any type of person.

## 🔗 Connections (6)

- ← Dependency: [[PersonInformation (Class 1820119)]]
- ← Dependency: [[ClientData (Class 1820099)]]
- ← Dependency: [[Application (Class 1820110)]]
- → Dependency: [[ContactRole (Enumeration 1820050)]]
- ← Dependency: [[Employment (Class 1820049)]]
- ← Dependency: [[Person (Class 1820043)]]

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
