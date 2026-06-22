---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API"
domain: "Requirements Model"
element_id: 1821417
diagrams: 8
connections: 38
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}DocumentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API

## 📝 Notes

Object representing a structure of the root element of the data source.

When processed in DSM:
a) For a data source with code 'AGREEMENT_DATA', values of selected sub-elements are retrieved by calling the respective REST API provided by the Loan Origination module (i.e. GET Applications) with following input parameters:

	
- code = dataSources.applicationCode from the received POST Generate request
	
- projections = ['CLIENT', 'APPLICATION_DETAILS', 'APPLICATION_LOG', 'EXTERNAL_IDENTIFICATION_ATTRIBUTES', 'PAYMENT_CHANNEL', 'REFINANCED_CONTRACT', 'RELATIONSHIP']


b) For a data source with code 'HO_CONTRACT_DATA', values of selected sub-elements are retrieved by calling the respective REST API provided by the COMA module (i.e. GET https://coma.{environment}/rest/v12/contracts/{contractCode}) with following input parameters:

	
- contractCode = dataSources.contractCode from the received POST Generate request
	
- projection = ['CUSTOMER_DEFAULT']

{ADD LOR-9974} Added new attribute AdditionalPersonsPIF{/ADD}

## 🔗 Connections (38)

- → Dependency «use»: [[RefinancingDataType]]
- ← Association: [[RELInstallmentType]]
- → Dependency «use»: [[ChargesType]]
- → Dependency: [[{MOD}CreditAccountType]]
- → Dependency «use»: [[{MOD}User]]
- → Dependency: [[Get current party data from CIF]]
- → Dependency «use»: [[SellerType]]
- → Dependency «use»: [[ContactsType (Class 1878240)]]
- → Dependency «use»: [[{MOD}EmploymentType]]
- → Dependency «use»: [[AdditionalPersonTypeList]]
- → Dependency: [[Get all application DDM]]
- → Dependency: [[Get current party data from CIF]]
- → Dependency: [[Get application payment channel]]
- → Dependency: [[ExtendedInformationType]]
- → Dependency «use»: [[InstallmentsType (Class 1821421)]]
- → Dependency «use»: [[{MOD}FinancialType]]
- → Dependency: [[ExtendedProperties (Class 1878262)]]
- → Dependency «use»: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]
- → Dependency «use»: [[OtherInformationType]]
- → Dependency «use»: [[{MOD}DocumentFile]]
- → Dependency: [[Get contract payment channels]]
- → Dependency «use»: [[Subvention (Class 1821418)]]
- ← Generalization: [[contractData]]
- → Dependency «use»: [[DirectDebitMandates]]
- → Dependency: [[VerificationType]]
- → Dependency «use»: [[ExternalIdentifiersType]]
- → Dependency «use»: [[AddressesType (Class 1878215)]]
- → Dependency «use»: [[LanguagesType]]
- → Dependency: [[Get application DDM]]
- → Dependency: [[PaymentChannelsType]]
- → Dependency «use»: [[ProductDetailsType]]
- → Dependency «use»: [[{MOD}PersonalDetailsType]]
- → Dependency: [[CustomDataType (Class 1821409)]]
- → Dependency «use»: [[CommoditiesType]]
- → Dependency «use»: [[SecurityQuestionType]]
- → Dependency «use»: [[ContractPartyRole]]
- → Usage: [[{ADD}externalCustomerDataList]]
- → Dependency «use»: [[InsurancesType]]

## 📊 Appears In (8 diagrams)

- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Custom: LOR-9359 - Completely remove sign pad feature
- Custom: LOR-9974 Add client's EC attributes to HO_CONTRACT
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_CONTRACT_DATA - financial data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentChannels | PaymentChannelsType |  |
| contractNumber | string |  |
| contractDate | dateTime |  |
| creditAccountNumber | string |  |
| client | PersonalDetailsType |  |
| product | ProductDetailsType |  |
| consumerLoanParameters | ConsumerLoanParametersType |  |
| employment | {MOD}EmploymentType |  |
| financial | {MOD}FinancialType |  |
| seller | SellerType |  |
| commodities | CommoditiesType |  |
| {MOD}addresses | AddressesType |  |
| charges | ChargesType |  |
| {MOD}personContacts | ContactsType |  |
| {MOD}customerPreferredLanguages | LanguagesType |  |
| insurances | InsurancesType |  |
| activeInstallments | InstallmentsType |  |
| relInstallmentParameters | RELInstallmentParametersType |  |
| signDate | dateTime |  |
| approvalDate | dateTime |  |
| approvedBy | string |  |
| additionalPersons | AdditionalPersonTypeList |  |
| {MOD}securityQuestion | SecurityQuestionType |  |
| refinancingData | RefinancingDataType |  |
| otherInformationType | OtherInformationType |  |
| contractPartyRoles | ContractPartyRole |  |
| subventions | Subvention |  |
| extendedInformation | ExtendedInformationType |  |
| verification | VerificationType |  |
| customData | CustomDataType |  |
| contractExternalIdentifiers | ExternalIdentifiersType |  |
| creditAccount | CreditAccountType |  |
| contractExtendedProperties | ExtendedProperties |  |
| originator | User |  |
| directDebitMandates | DirectDebitMandates |  |
| {ADD}externalCustomerData | AdditionalPersonTypeList |  |
