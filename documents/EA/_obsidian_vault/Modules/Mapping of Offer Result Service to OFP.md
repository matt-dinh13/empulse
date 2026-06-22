---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result"
domain: "Modules"
element_id: 1341765
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Mapping of Offer Result Service to OFP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result

## 📝 Notes

Mapping of Offer Result Service to OFP
Service = OFP.OfferService.Service.(Code + Version)
Tariff = OFP.OfferService.Tariff(Code + Version)
InsuranceProgram = OFP.OfferInsuranceService.(InsuranceProgramCode + InsuranceProgramVersion)

OfferResultService.OfferRequestCommodity (reference to commodity assigned to Service)
OfferResultService.OfferResultServiceTariff Item (reference to OfferResultTariffItem assigned to Service)

## 📊 Appears In (1 diagrams)

- Logical: Offer Result Service
