---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM"
domain: "Requirements Model"
element_id: 1821425
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 ExternalIdentifiersType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

## 📝 Notes

Object representing a list of some particular identifiers to external entities (wrapping elements).

## 🔗 Connections (2)

- → Dependency «use»: [[{MOD}KeyAndValueType]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalIdentifier | KeyAndValueType |  |
