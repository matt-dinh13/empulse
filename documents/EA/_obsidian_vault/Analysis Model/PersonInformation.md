---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819743
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 PersonInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 🔗 Connections (6)

- → Dependency: [[Employment (Class 1819762)]]
- → Realisation: [[LOR-793 - Unification of XSD in ApplicationManagementWS]]
- → Dependency: [[Contact (Class 1819789)]]
- → Dependency: [[NameType]]
- → Dependency: [[PersonAddress (Class 1819740)]]
- ← Dependency: [[{MOD}ClientData (Class 1819736)]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| nationalIdentificationNumber | string |  |
| birthDate | date |  |
| birthPlace | string |  |
| contacts | ContactType |  |
| gender | string |  |
| name | NameType |  |
| remitter | boolean |  |
| personEmployement | EmploymentType |  |
| personAddresses | AddressType |  |
| relationToClient | string |  |
| personId | string |  |
