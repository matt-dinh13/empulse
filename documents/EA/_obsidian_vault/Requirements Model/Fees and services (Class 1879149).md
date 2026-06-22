---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid"
domain: "Requirements Model"
element_id: 1879149
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 Fees and services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid

## 📝 Notes

The grid lists standard fees defined for the offer matched to the services adjusted in the offer. 

Fees are taken from FP Tariff Items / OFP Tariff Items based on the tab's source (see Tab6-Repayment)
Services are taken from Contract Service / Offer Service accordingly.

Fees and services are matched together in "full outer join" style so the grid shows:

	
- Fees which are not linked to a service
	
- Fees for the services
	
- Services which do not have any fees linked and are not mandatory for contract (Service.Mandatory_on_contract = false)


If some service is adjusted in the same contract more than once (commodity level services) only one line for the service and each fee type is shown in the grid with summed value of the fee. 
e.g.: 

	
- insurance service for fridge (insurance premium = 100)


	
- insurance service for dishwasher (insurance premium = 120)
	
- one line will be shown: insurance service, fee type = insurance premium, amount = 220


Localization Code: SERV_FeesAndServices

## 🔗 Connections (1)

- → Dependency: [[Evaluate Charged To for Tariff Item Type]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-6340 (CLM-3149) Extend ContractRegistrationOutPaySE and display subventions in Fee and services grid
- Custom: Tab-Payment channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | text |  |
| Name | text |  |
| Fee Type | text |  |
| Amount | Financial Amount |  |
| Frequency | text |  |
| Charged To | int |  |
