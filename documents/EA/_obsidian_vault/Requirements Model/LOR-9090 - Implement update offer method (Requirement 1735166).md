---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21"
domain: "Requirements Model"
element_id: 1735166
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9090 - Implement update offer method

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9086 - New REST API for CustomerOfferWS v21

## 📝 Notes

As Loan Origination module, I need to enable the external systems to update the service data of selected customer offers based on the provided parameters via my API, so they can use update such data within their online processes when needed.

Solution proposal:

	
- Analyze the actual usage of CustomerOfferWS.UpdateOffer method on production environments:
- If not used, there is no need to implement the equivalent method for the Customer Offer REST endpoint at all.
- Otherwise implement the PATCH method for updating the service data on a selected customer offer (only the parameters, which are being actually updated via this method on production shall be implemented) - including following:
   - Unit tests
   - AT for the respective method
   - Migration guide record
   - Swagger documentation

## 🔗 Connections (1)

- → Realisation: [[LOR-9086 - New REST API for CustomerOfferWS v21]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9086 - New REST API for CustomerOfferWS v21
- Custom: LOR-9090 - Implement update offer method
