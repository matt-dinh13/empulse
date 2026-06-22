---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Cards"
domain: "Analysis Model"
element_id: 1609823
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Cards

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Cards

## 📝 Notes

This grid displays information about card(s) related to the contract. List of cards is obtained using the CardInfoWS interface (the GetCardRequest with accountNumber = current_contract.Credit_account_number).

Localization code: -

Source: Card_detail where Card_detail.Contract_number = contract number of the displayed contract

Order of columns:

	
- Number
	
- Type
	
- Status
	
- Account number
	
- Detail

## 🔗 Connections (1)

- → Dependency: [[12.501 Show card detail (UseCase 1627282)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab-Cards

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Number | text |  |
| Type | text |  |
| Status | text |  |
| Account number | number |  |
| Detail | icon |  |
