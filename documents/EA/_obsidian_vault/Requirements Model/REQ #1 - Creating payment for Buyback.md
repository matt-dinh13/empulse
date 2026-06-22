---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1548 (CLM-936) Buyback Phase 1"
domain: "Requirements Model"
element_id: 1826197
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Creating payment for Buyback

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1548 (CLM-936) Buyback Phase 1

## 📝 Notes

Goal of this requirement is to get a purchase price of the client's mobile which is to be used for decreasing of the new loan down payment (Buy-back amount)
The purchase price is registered on a Document of the " USED_PHONE_DETAILS" type .
Here, system get the purchase price from the mentioned document, next creates an internal payment of Buyback type and creates payment for retailer which will be increased by Buyback amount (see Use case model chapter for info in detail).

Needed prerequisites for realization of CLM part:

	
- Document Type.Code = USED_PHONE_DETAILS is defined within LOR part of the task


	
- Outgoing Payment Type = 'BBP' (Buyback payment) has to be established (Payment team)

## 📊 Appears In (1 diagrams)

- Custom: CBL-1548 (CLM-936) Buyback Phase 1
