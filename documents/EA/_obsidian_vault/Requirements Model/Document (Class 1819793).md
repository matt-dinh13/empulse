---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS"
domain: "Requirements Model"
element_id: 1819793
diagrams: 5
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 Document

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS

## 📝 Notes

Individual instance of a document.

## 🔗 Connections (6)

- → Dependency: [[Get all application DDM]]
- ← Dependency: [[ApprovedApplication (Class 1819797)]]
- ← Dependency: [[ApplicationDetail]]
- → Dependency: [[DocumentRelationType (Enumeration 1819761)]]
- ← Dependency: [[Application (Class 1819757)]]
- ← Dependency: [[{MOD}ClientData (Class 1819736)]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- Logical: Application
- Logical: ApplicationManagementWS_v22 - UpdateApprovedApplication
- Logical: Get Application - client data
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
