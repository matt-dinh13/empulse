---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9064 - Requirement to introduce IMEI/Serial number cancellation through partner's cancellation API"
domain: "Requirements Model"
element_id: 1732352
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9064 - Requirement to introduce IMEI/Serial number cancellation through partner's cancellation API

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9064 - Requirement to introduce IMEI/Serial number cancellation through partner's cancellation API

## 📝 Notes

Why:
To enable Commodity module to get the offer code for a canceled application, so it can use it for calling the CustomerOfferWS in order to retrieve the applicable commodity ID and unblock the externally validated IMEI at the partners' systems.

What:

	
- Return the offer data (i.e. dataSet = 'OFFER') within GetApplicationDataResponse even for the canceled applications where the associated Temporary_Application record has been already archived.

## 🔗 Connections (1)

- ← Realisation: [[LOR-9068 - Return offer data for canceled applications within GetApplicationDataResponse]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9064 - Requirement to introduce IMEI/Serial number cancellation through partner's cancellation API
