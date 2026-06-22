---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768203
diagrams: 3
connections: 20
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ApplicationDetail

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 🔗 Connections (16)

- → Dependency: [[{ADD}DirectDebitMandates]]
- → Dependency: [[Relationships]]
- → Dependency: [[ExtendedProperty]]
- → Dependency: [[{MOD}ClientData]]
- → Dependency: [[Document (Class 1768268)]]
- → Dependency: [[ApplicationEvent]]
- → Dependency: [[StatusHistory]]
- → Dependency: [[ScoringDataType]]
- → Dependency: [[Commodity (Class 1768261)]]
- → Dependency: [[Service (Class 1768269)]]
- → Dependency: [[PaymentChannels (Class 1768256)]]
- → Dependency: [[Installment (Class 1768257)]]
- → Dependency: [[ExternalIdentificationAttributes]]
- → Dependency: [[RefinancedContract (Class 1768196)]]
- → Dependency: [[Offer (Class 1768191)]]
- ← Dependency: [[GetApplicationDataResponse]]

## 📊 Appears In (3 diagrams)

- Logical: ApplicationManagementWS_v23 - GetApplicationData
- Logical: Get Application - client data
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| client | ClientData |  |
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
| paymentChannel | PaymentChannels |  |
| {ADD}directDebitMandates | {ADD}DirectDebitMandates |  |
