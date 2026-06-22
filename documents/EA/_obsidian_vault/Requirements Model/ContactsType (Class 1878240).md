---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878240
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 ContactsType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object representing a list of some particular contacts (wrapping elements).

## 🔗 Connections (3)

- ← Dependency «use»: [[PersonDataType]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency «use»: [[ContactType (Class 1878251)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contact | ContactType |  |
