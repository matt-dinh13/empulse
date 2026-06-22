---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768262
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Contact

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Contact of any type of person.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Application]]
- ← Dependency: [[Employment (Class 1768246)]]
- → Dependency: [[ContactRole]]
- ← Dependency: [[Person (Class 1768197)]]

## 📊 Appears In (1 diagrams)

- Logical: Application

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
