---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1877745
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {ADD}Insurance service fees

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

{ADD PCG-5652/}
For country: ID

Fees for insurance service are fees for service where Service.ServiceType.ServiceCategory=INSURANCE

Service fee calculation see  Service fees amount definition.

## 🔗 Connections (3)

- ← Dependency: [[{ADD}Provided Credit Amount Without Insurance]]
- ← Dependency: [[{ADD}Monthly Payment Without Insurance]]
- → Dependency: [[Service fees amount definition]]

## 📊 Appears In (3 diagrams)

- Custom: Financial calculations without insurance
- Custom: Offer Calculation algorithm - STANDARD
- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
