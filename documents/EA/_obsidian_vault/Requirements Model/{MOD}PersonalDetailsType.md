---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents"
domain: "Requirements Model"
element_id: 1821413
diagrams: 4
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}PersonalDetailsType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents

## 📝 Notes

Object containing the personal data of some particular client.

## 🔗 Connections (8)

- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency «use»: [[PersonCustomDataType]]
- → Dependency «use»: [[DocumentsType (Class 1878261)]]
- → Dependency: [[Get current party data from CIF]]
- → Dependency «use»: [[PersonFullNameType]]
- → Dependency «use»: [[{MOD}NameType]]
- → Dependency «use»: [[FinancialSituationType]]
- → Dependency: [[DocumentsType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
- Custom: LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA
- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}name | PersonFullNameType |  |
| {MOD}dateOfBirth | dateTime |  |
| {MOD}placeOfBirth | string |  |
| {MOD}CUID | long |  |
| {MOD}gender | string |  |
| {MOD}education | string |  |
| {MOD}maritalStatus | string |  |
| {MOD}religion | string |  |
| {MOD}houseType | string |  |
| {MOD}jointFamily | boolean |  |
| {MOD}numberOfDependents | int |  |
| {MOD}numberOfChildren | int |  |
| accompaniment | string |  |
| {MOD}nickname | string |  |
| {MOD}nationalIdentificationNumber | string |  |
| {MOD}citizenship | string |  |
| documents | DocumentsType |  |
| {MOD}customData | PersonCustomDataType |  |
| financialStatus | FinancialSituationType |  |
