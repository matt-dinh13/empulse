---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821445
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}User

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing data about some particular user.

When processed in DSM:
Values of individual sub-elements are retrieved by calling the respective REST API provided by HomeSIS module (i.e. GET Users) with following input parameters:
   - code = code of the respective user (defined by the applicable context - see the superior element for more details)

## 🔗 Connections (2)

- → Dependency: [[Users]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
