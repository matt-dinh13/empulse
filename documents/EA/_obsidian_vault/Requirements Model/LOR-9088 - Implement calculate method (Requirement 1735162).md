---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21"
domain: "Requirements Model"
element_id: 1735162
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9088 - Implement calculate method

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21

## 📝 Notes

As Loan Origination module, I need to enable the external systems to calculate the customer offers based on the provided parameters via my API, so they can use such offers within their online processes.

Solution proposal:

	
- Revise the previously implemented POST method (Customer Offer REST endpoint) for calculation of customer offers and adjust it in a way, that list of codes identifying  the calculated offers is returned instead of the raw offer data (details of the offers shall be retrieved via the GET method eventually).
- Unit tests
- AT for the respective method
- Migration guide record
- Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9086 - New REST API for CustomerOfferWS v21]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9086 - New REST API for CustomerOfferWS v21
- Custom: LOR-9088 - Implement calculate method
