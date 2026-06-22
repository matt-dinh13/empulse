---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879504
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 ClientDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

Personal and contact data of the client for print

Data is obtained by Get client current data from CIF rule under the UC 13.205 Create contract supplement documents

## 🔗 Connections (9)

- → Dependency: [[AddressTypesDto]]
- → Dependency: [[AdditionalPersonDataDto]]
- → Dependency: [[PhoneNumber (Class 1879501)]]
- → Dependency: [[DocumentType (Class 1879500)]]
- → Dependency: [[EmailAddress (Class 1879498)]]
- → Dependency: [[Person (Class 1879495)]]
- → Dependency: [[CustomerPersonRelationship (Class 1879493)]]
- ← Dependency: [[AlopRequestDocument]]
- ← Dependency: [[AlopRequestDocument]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| additionalPersons | AdditionalPersonDataDto |  |
| adresses | AddressTypesDto |  |
| name | Person |  |
| phoneNumbers | PhoneNumber |  |
| documents | DocumentType |  |
| emailAddresses | EmailAddress |  |
| customerPersonRelationship | CustomerPersonRelationship |  |
