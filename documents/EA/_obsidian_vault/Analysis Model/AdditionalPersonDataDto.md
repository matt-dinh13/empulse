---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879503
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 AdditionalPersonDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

Personal and contact data of the related person

## 🔗 Connections (1)

- ← Dependency: [[ClientDataDto (Class 1879504)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| adresses | AddressTypesDto |  |
| name | Person |  |
| documents | DocumentType |  |
| phoneNumbers | PhoneNumber |  |
| relation | string |  |
| emailAddresses | EmailAddress |  |
