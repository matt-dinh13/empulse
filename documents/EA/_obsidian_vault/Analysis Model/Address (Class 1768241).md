---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768241
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Address

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Description of the street and house (in case that is not necessary to differentiate these attributes).

## 🔗 Connections (4)

- ← Dependency: [[Employment (Class 1768246)]]
- ← Dependency: [[PersonAddress]]
- ← Dependency: [[ClientAddress (Class 1768209)]]
- → Dependency: [[Enumerable (Class 1768208)]]

## 📊 Appears In (1 diagrams)

- Logical: Application

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
