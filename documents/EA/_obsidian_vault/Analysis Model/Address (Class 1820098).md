---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820098
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Address

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 📝 Notes

Description of the street and house (in case that is not necessary to differentiate these attributes).

## 🔗 Connections (4)

- ← Dependency: [[ClientAddress (Class 1820116)]]
- ← Dependency: [[PersonAddress (Class 1820096)]]
- → Dependency: [[Enumerable (Class 1820078)]]
- ← Dependency: [[Employment (Class 1820049)]]

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
