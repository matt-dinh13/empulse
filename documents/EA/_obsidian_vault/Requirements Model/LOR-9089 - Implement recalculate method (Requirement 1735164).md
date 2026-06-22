---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21"
domain: "Requirements Model"
element_id: 1735164
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9089 - Implement recalculate method

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21

## 📝 Notes

As Loan Origination module, I need to enable the external systems to recalculate the selected customer offer based on the provided parameters via my API, so they can use recalculate the offers within their online processes when needed.

Solution proposal:

	
- Analyze the business actual usage of CustomerOfferWS.RecalculateCustomerOffer method and decide for a more suitable solution options:
- Original offer instance is updated after the recalculation and only the applicable HTTP result code is returned as a response (no need to return customer offer code as it is not changed). Details of the offer shall be retrieved via the GET method eventually.
- New offer instance is created + only the customer offer code is returned within the response (details of the offer shall be retrieved via the GET method eventually).
	
- Implemented POST method (Customer Offer REST endpoint) for recalculation of the customer offer - including following:
- Unit tests
- AT for the respective method
- Migration guide record
- Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9086 - New REST API for CustomerOfferWS v21]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9086 - New REST API for CustomerOfferWS v21
- Custom: LOR-9089 - Implement recalculate method
