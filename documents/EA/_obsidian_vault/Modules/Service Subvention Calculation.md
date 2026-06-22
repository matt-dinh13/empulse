---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1822513
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Service Subvention Calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

// Calculation of Subventions defined for Services
// In contracts to the Product Subvention the Service Subvention is paid from HC to Partner, so that the value of subvention is negative 

Input/Output: 
- OFP (Offer Financial Parameters) 

Calculation:

Product = OFP.ProductVariant.Product

For each PService assigned to Product where PService.Subvention is defined

Search for OFP.OfferService (OFPService) where OfferService.Service = PService 
If not found then continue with the next PService.

For each Subvention from PService.Subvention
Calculate SubventionAmount (see formula below).
// In contracts to the Product Subvention the Service Subvention is paid from HC to Partner, 
// so that the value of subvention is negative 
Create new instance in OFP.OfferServiceSubventionItem with 
- Charged to Client = 0%
- ItemAmount = - SubventionAmount 
- reference to OFPService
Continue with the next Subvention

Continue with the next PService

Formula for Subvention Amount calculation:
SubventionAmount = FixedAmount + Percentage * Base
Result is rounded using Rounding, RoundingScale
Base is evaluated from PercentageBasedOn by the rules described in Base Type definition.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Calculate product offer]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Offer recalculation
- Custom: Subvention calculation
