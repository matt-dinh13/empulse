---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857110
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Fees and services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

Grid containing the list of standard fees and services adjusted on the selected product offer. In case of mutual dependence, the service-related fee is matched to the respective service within a single row.

Fees and services displayed within the grid are matched together in FULL OUTER JOIN style, so the grid contains:

	
- Standard fees not related to any service.
	
- Service fees applicable for particular services.
	
- Services, which are not mandatory for the application (i.e. Service.Mandatory_On_Contract = FALSE) and with no linked service fees.


Note: The default ordering cannot be changed by user.

In case some service is adjusted on the application more than once (commodity-level services), then only single row is displayed for each service - fee type combination and the applicable fee amounts are summed.

Example:
Selected product offer has adjusted following services:
   - Goods insurance (INSGO_01) for a fridge with Insurance premium = 50 EUR.
   - Goods insurance (INSGO_01) for a dishwasher with Insurance premium = 60 EUR.
The result grid row is then displayed as follows:
   Code: 'INSGO_01' | Service name: 'Goods insurance' | Type - name: 'Insurance premium' | Amount: '110 EUR'


LDM source:

	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Tariff->Tariff_Item //For applicable standard fees.
	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service->Tariff->Tariff_Item //For applicable service fees.
	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Service //For applicable services.


Localization Code:
SER_FeesAndServices

## 🔗 Connections (1)

- → Dependency: [[Evaluate Charged To for Tariff Item Type]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Service Code |  |
| Service name | Service Name |  |
| Type - name | text |  |
| Amount | Financial Amount |  |
| Frequency | text |  |
| Charged to | text |  |
