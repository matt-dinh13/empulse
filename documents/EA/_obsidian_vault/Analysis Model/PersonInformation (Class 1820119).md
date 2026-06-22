---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820119
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 PersonInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 🔗 Connections (6)

- → Realisation: [[LOR-793 - Unification of XSD in ApplicationManagementWS]]
- ← Dependency: [[ClientData (Class 1820099)]]
- → Dependency: [[PersonAddress (Class 1820096)]]
- → Dependency: [[Contact (Class 1820081)]]
- → Dependency: [[NameType (Class 1820053)]]
- → Dependency: [[Employment (Class 1820049)]]

## 📊 Appears In (1 diagrams)

- Logical: Get Application - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| birthDate | date |  |
| birthPlace | string |  |
| contacts | ContactType |  |
| gender | string |  |
| name | NameType |  |
| nationalIdentificationNumber | string |  |
| remitter | boolean |  |
| personEmployement | EmploymentType |  |
| personAddresses | AddressType |  |
| relationToClient | string |  |
| personId | string |  |
