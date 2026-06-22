---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1607542
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AddressTypesDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

Client's addresses by their roles

Source: data.postalAddresses

## 🔗 Connections (4)

- → Dependency: [[AddressType (Class 1879489)]]
- → Dependency: [[AddressType (Class 1879489)]]
- ← Dependency: [[ClientDataDto]]
- ← Dependency: [[ClientDataDto (Class 1879504)]]

## 📊 Appears In (4 diagrams)

- Logical: HO_ALOP_DATA
- Logical: HO_SERVICE_REQUEST_DATA
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contactAddress | AddressType |  |
| permanentAddress | AddressType |  |
