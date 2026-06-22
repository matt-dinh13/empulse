---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1821414
diagrams: 4
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}AdditionalPersonType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object containing the data of some particular additional person.

## 🔗 Connections (8)

- → Dependency «use»: [[NameBaseType]]
- → Dependency «use»: [[PersonFullNameBaseType]]
- → Dependency: [[PersonCustomDataType]]
- → Dependency «use»: [[{MOD}FinancialDataRemittance]]
- → Dependency «use»: [[ContactType (Class 1878251)]]
- ← Dependency «use»: [[AdditionalPersonTypeList]]
- → Dependency: [[AddressesType (Class 1878215)]]
- → Dependency: [[DocumentsType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Custom: LOR-9700 Data source: beneficiary flag
- Logical: External Reference
- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}name | PersonFullNameBaseType |  |
| {MOD}relation | string |  |
| {MOD}nationalIdentificationNumber | string |  |
| {MOD}dateOfBirth | dateTime |  |
| {MOD}placeOfBirth | string |  |
| {MOD}additionalPersonContact | ContactType |  |
| {MOD}address | AddressesType |  |
| financialDataRemittance | FinancialDataRemittance |  |
| {MOD}documents | DocumentsType |  |
| customData | PersonCustomDataType |  |
