---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS"
domain: "Requirements Model"
element_id: 1819787
diagrams: 4
connections: 19
tags:
  - class
  - requirements-model
---

# 🔷 ApplicationDetail

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS

## 🔗 Connections (15)

- → Dependency: [[StatusHistory (Class 1819792)]]
- → Dependency: [[Document (Class 1819793)]]
- → Dependency: [[Service (Class 1819812)]]
- → Dependency: [[ExtendedProperty (Class 1819785)]]
- → Dependency: [[Relationships (Class 1819782)]]
- → Dependency: [[Installment (Class 1819775)]]
- → Dependency: [[ExternalIdentificationAttributes (Class 1819767)]]
- → Dependency: [[ApplicationEvent (Class 1819754)]]
- → Dependency: [[ScoringDataType (Class 1819753)]]
- → Dependency: [[PaymentChannel (Class 1819752)]]
- → Dependency: [[Commodity (Class 1819747)]]
- → Dependency: [[Offer (Class 1819746)]]
- → Dependency: [[{MOD}ClientData (Class 1819736)]]
- → Dependency: [[RefinancedContract (Class 1819734)]]
- ← Dependency: [[GetApplicationDataResponse (Class 1819727)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- Logical: ApplicationManagementWS_v22 - GetApplicationData
- Logical: Get Application - client data
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| client | ClientData |  |
| clientCUID | string |  |
| code | string |  |
| commodity | Commodity |  |
| documents | Document |  |
| events | ApplicationEvent |  |
| extendedProperty | ExtendedProperty |  |
| installments | Installment |  |
| relationships | Relationships |  |
| scoring | ScoringData |  |
| services | Service |  |
| statusHistory | StatusHistory |  |
| status | string |  |
| substatus | string |  |
| refinancedContracts | RefinancedContract |  |
| externalIdentificationAttributes | ExternalIdentificationAttribute |  |
| xSellOfferRequested | boolean |  |
| offers | Offer |  |
| accountNumber | string |  |
| paymentChannel | PaymentChannel |  |
