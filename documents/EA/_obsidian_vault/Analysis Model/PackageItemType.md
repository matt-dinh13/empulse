---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_PACKAGE"
domain: "Analysis Model"
element_id: 1351270
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PackageItemType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_PACKAGE

## 📝 Notes

Items in contract package

## 🔗 Connections (3)

- → Dependency «use»: [[DocumentType]]
- → Dependency «use»: [[{MOD}NameType]]
- ← Dependency «use»: [[DocumentData (Class 1351271)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_PACKAGE

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| supplementNumber | string |  |
| ItemType | String |  |
| numberOfDocuments | int |  |
| documentTypeItems | DocumentType |  |
| clientName | {MOD}NameType |  |
| {ADD}createdFrom | dateTime |  |
