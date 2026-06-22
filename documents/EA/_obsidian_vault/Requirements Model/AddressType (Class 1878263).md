---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration"
domain: "Requirements Model"
element_id: 1878263
diagrams: 13
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 AddressType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8484 GSTCalculatorService direct integration

## 📝 Notes

Object containing the data of some particular address.

## 🔗 Connections (9)

- ← Dependency «use»: [[DocumentData (Class 1351271)]]
- ← Dependency «use»: [[PaidContractChannel_PBA]]
- ← Dependency: [[ContractInstallmentType]]
- ← Dependency «use»: [[ConsentDocumentType]]
- ← Dependency «use»: [[SellerType]]
- ← Dependency «use»: [[{MOD}EmploymentType]]
- ← Dependency «use»: [[{MOD}InsuranceType]]
- → Dependency «use»: [[TaxOffice (Class 1878250)]]
- ← Dependency «use»: [[AddressesType (Class 1878215)]]

## 📊 Appears In (13 diagrams)

- Custom: LOR-8484 GSTCalculatorService direct integration
- Custom: LOR-9063 - Remove temporary switch useDirectGstIntegration
- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_CONTRACT_PACKAGE
- Logical: HO_GENERAL_TYPES
- Logical: HO_INSTALLMENT_DATA
- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| houseNumber | string |  |
| floor | string |  |
| landmark | string |  |
| district | string |  |
| street | string |  |
| locality | string |  |
| subDistrict | string |  |
| block | string |  |
| blockSet | string |  |
| town | string |  |
| zipCode | string |  |
| region | string |  |
| timeAtAddress | string |  |
| flat | string |  |
| country | string |  |
| sameAsPermanent | boolean |  |
| taxOffice | TaxOffice |  |
