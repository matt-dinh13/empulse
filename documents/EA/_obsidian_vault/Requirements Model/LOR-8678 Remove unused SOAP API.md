---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS"
domain: "Requirements Model"
element_id: 1820836
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8678 Remove unused SOAP API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS

## 📝 Notes

As a system, I will not offer deprecated API for usage.

Prosposed solution

Remove following deprecated API:

	
- CustomerOfferWS v20
- objects in BSL (UC and access rights are used in v20)
- objects in hss-itegration


	
- ApplicationOfferManagementWS v7
- objects in BSL, UC 01.166 (other UC are used in different APIs)
- objects in hss-itegration

## 🔗 Connections (1)

- → Realisation: [[LOR-8250 Upgrade to version 21 of CustomerOfferWS (Requirement 1820835)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8250 Upgrade to version 21 of CustomerOfferWS
