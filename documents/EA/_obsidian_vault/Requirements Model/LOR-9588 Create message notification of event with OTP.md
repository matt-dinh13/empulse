---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9540 PIF integrations for PDP Decree 13 tracking of consents"
domain: "Requirements Model"
element_id: 1764298
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9588 Create message notification of event with OTP

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9540 PIF integrations for PDP Decree 13 tracking of consents

## 📝 Notes

As a system, I will send a notification every time customer gives consent to process personal data in order to update consent status to PIF.

Proposed solution
For the following events, system will send Rabbit message to a specific exchange.

	
- agreement is singed - both via API or UI
	
- OTP is verified in RBP process - process using the BSL UI only
	
- OTP is verified in 1BoD of application form - process using BSL UI only

## 🔗 Connections (1)

- → Realisation: [[LOR-9540 PIF integrations for PDP Decree 13 tracking of consents (Requirement 1764299)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9540 PIF integrations for PDP Decree 13 tracking of consents
