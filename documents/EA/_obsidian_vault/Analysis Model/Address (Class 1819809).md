---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819809
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Address

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Description of the street and house (in case that is not necessary to differentiate these attributes).

## 🔗 Connections (4)

- ← Dependency: [[ClientAddress (Class 1819802)]]
- ← Dependency: [[Employment (Class 1819762)]]
- ← Dependency: [[PersonAddress (Class 1819740)]]
- → Dependency: [[Enumerable (Class 1819735)]]

## 📊 Appears In (2 diagrams)

- Logical: Application
- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| countryCode | string |  |
| region | Enumerable |  |
| district | Enumerable |  |
| subDistrict | Enumerable |  |
| block | string |  |
| blockSet | string |  |
| flat | string |  |
| floor | string |  |
| houseNumber | string |  |
| landmark | string |  |
| locality | Enumerable |  |
| street | Enumerable |  |
| streetAndHouseDescription | string |  |
| town | Enumerable |  |
| zipCode | Enumerable |  |
| timeAtAddress | date |  |
