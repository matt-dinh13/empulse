---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21"
domain: "Requirements Model"
element_id: 1735160
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9087 - Create REST endpoint

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21

## 📝 Notes

As Loan Origination module, I need to enable the external systems to get the detail of a customer offer via my API, so they can use such data within their online processes.

Solution proposal:

	
- Create a new Customer Offer REST endpoint (to be replacing the CustomerOfferWS v21 in the future).
- Implement the GET method for getting the data of a selected customer offer - including following:
   - Unit tests
   - AT for the respective method
   - Migration guide record
   - Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9086 - New REST API for CustomerOfferWS v21]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9086 - New REST API for CustomerOfferWS v21
- Custom: LOR-9087 - Create REST endpoint
