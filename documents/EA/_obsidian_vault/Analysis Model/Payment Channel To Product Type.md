---
type: Class
stereotype: "association"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1872431
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Payment Channel To Product Type

> **Type**: Class · **Stereotype**: «association»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/Logical Data Model

## 📝 Notes

Defines payment channels allowed for specific purpose for particular product and transaction types. 
It serves as allowed combination data source for following function:

	
- Edit available disbursement channels for Partner and Salesroom in SNM module and HomeSIS
	
- 01.660 Change repayment channel (Change repayment channel screen)
	
- Tab7-Direct debit mandates (Contract detail screen)
	
- Way of repayment - product AF (Payment information panel of the application form)

## 🔗 Connections (4)

- → Dependency: [[Product Transaction Type]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[Payment Channel Type]]
- → Dependency: [[Payment Purpose Type]]

## 📊 Appears In (1 diagrams)

- Logical: Product Type - Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Payment Channel Type | Payment Channel Type |  |
| Product Type | Product Type |  |
| Purpose | Payment Purpose |  |
| Transaction Type | Product Transaction Type |  |
