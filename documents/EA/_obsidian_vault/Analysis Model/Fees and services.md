---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755475
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Fees and services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

The grid lists standard fees defined for the offer matched to the services adjusted in the offer. 

Fees are taken from OFP Tariff Items.
Services are taken from Offer Service.

Fees and services are matched together in "full outer join" style so the grid shows:

	
- Fees which are not linked to a service
	
- Fees for the services
	
- Services which do not have any fees linked and are not mandatory for contract (Service.Mandatory_on_contract = false)


If some service is adjusted in the same contract more than once (commodity level services) only one line for the service and each fee type is shown in the grid with summed value of the fee. 
e.g.: 

	
- insurance service for fridge (insurance premium = 100)


	
- insurance service for dishwasher (insurance premium = 120)
	
- one line will be shown: insurance service, fee type = insurance premium, amount = 220


Localization Code: SER_FeesAndServices

## 🔗 Connections (1)

- → Dependency: [[Evaluate Charged To for Tariff Item Type]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Fees and services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Code | text |  |
| Fee Type | text |  |
| Frequency | text |  |
| Charged to | int |  |
| Name | text |  |
