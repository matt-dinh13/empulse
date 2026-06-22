---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services"
domain: "Requirements Model"
element_id: 1833304
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 ContractInformation

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services

## 📝 Notes

This entity defines structure for information provided about a contract.

## 🔗 Connections (4)

- ← Dependency «use»: [[GetContractsForCrossChecksResponse]]
- → Dependency «use»: [[PersonInformation (Class 1833303)]]
- → Dependency «use»: [[AddressInformation]]
- → Dependency «use»: [[AddressInformation]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-12580 (CLM-4090) Remove dependency on Debt Catalogue tables - services
- Logical: ContractWS - methods for internal usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| contractStatus | string |  |
| dpdCurrent | number |  |
| dpdMaximal | number |  |
| clientFullName | string |  |
| clientMobilePhone | string |  |
| clientHomePhone | string |  |
| clientAddress | AddressInformation |  |
| employerName | string |  |
| employerPhone | string |  |
| employerAddress | AddressInformation |  |
| clientProfession | string |  |
| additionalPersons | PersonInformation |  |
| applicationCreationDate | dateTime |  |
| applicationCreationUser | string |  |
| applicationCreationSalesroom | Text |  |
| applicationDetailUrlSuffix | Text |  |
