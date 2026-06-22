---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607548
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ClientDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Personal and contact data of the client for print

Data is obtained by Get client current data from CIF rule under the UC 13.205 Create contract supplement documents

## 🔗 Connections (2)

- ← Dependency: [[LoanServiceRequestDocument]]
- → Dependency: [[AddressTypesDto]]

## 📊 Appears In (3 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| adresses | AddressTypesDto |  |
| birthDate | date |  |
| clientName | {MOD}NameType |  |
| nationalIdentificationNumber | string |  |
