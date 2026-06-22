---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS"
domain: "Requirements Model"
element_id: 1820059
diagrams: 4
connections: 20
tags:
  - class
  - requirements-model
---

# 🔷 ApplicationDetail

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS

## 🔗 Connections (16)

- → Dependency: [[ExtendedProperty (Class 1820075)]]
- → Dependency: [[Relationships (Class 1820108)]]
- → Dependency: [[Commodity (Class 1820094)]]
- → Dependency: [[ApplicationEvent (Class 1820102)]]
- → Dependency: [[Service (Class 1820115)]]
- → Dependency: [[ClientData (Class 1820099)]]
- → Dependency: [[RefinancedContract (Class 1820086)]]
- → Dependency: [[Offer (Class 1820090)]]
- → Dependency: [[ExternalIdentificationAttributes (Class 1820128)]]
- → Dependency: [[ScoringDataType (Class 1820107)]]
- → Dependency: [[Get all application DDM]]
- → Dependency: [[Installment (Class 1820127)]]
- → Dependency: [[StatusHistory (Class 1820091)]]
- → Dependency: [[AccountDetail]]
- → Dependency: [[CreatedDocument]]
- ← Dependency: [[GetApplicationDataResponse (Class 1820017)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- Logical: ApplicationManagementWS_v21 - GetApplicationData
- Logical: Get Application - client data
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | AccountDetail |  |
| client | ClientData |  |
| clientCUID | string |  |
| code | string |  |
| commodity | Commodity |  |
| documents | CreatedDocument |  |
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
