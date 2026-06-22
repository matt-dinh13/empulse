---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation"
domain: "Requirements Model"
element_id: 1776313
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9718 BSL: AM REST connector

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation

## 📝 Notes

As a system, I will include expiration date to data source HO_CONTRACT_DATA.

Proposed solution:

	
- create new AM REST connector
	
- change current CreateAccount SOAP call to POST /api/public/v1/accounts/
	
- use data.accountExpirationDate from response and add it to HO_CONTRACT_DATA data source (CreditAccountType.expirationDate)

## 🔗 Connections (1)

- → Realisation: [[LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation (Requirement 1776314)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation
