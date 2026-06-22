---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833284
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 AddressInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

This entity defines structure for information provided about a address.

## 🔗 Connections (3)

- → Dependency: [[KeyValueType (Class 1833310)]]
- ← Dependency «use»: [[ContractInformation]]
- ← Dependency «use»: [[ContractInformation]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| block | string |  |
| blockSet | string |  |
| country | string |  |
| flat | string |  |
| floor | string |  |
| houseNumber | string |  |
| landmark | string |  |
| locality | string |  |
| region | KeyValueType |  |
| district | KeyValueType |  |
| subdistrict | KeyValueType |  |
| streetName | string |  |
| town | KeyValueType |  |
| ZIP | KeyValueType |  |
