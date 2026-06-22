---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1878859
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}Presented Minimal Monthly Installment

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

Presented Minimal Monthly Installment (MMI) calculated from product parameters.
It is calculated only for ProductType = REL.

MMI = maximum (MP, XP) 
where:
{ADD PCG-2895}
If globalParameter.UseExternalRelOfferCalculation(USE_EXT_REL_OFFER_CALCULATION) = true:
Data for account are taken from MTCACC service (and not from product variant) as follows:
MP = Product.Service.MTCACC.MinInstallmentFixedAmount
XP = Product.Service.MTCACC.MinInstallmentRate * Base
else
{/ADD}
MP = Product.RevolvingProduct.MinInstallmentFixedAmount
XP = Product.RevolvingProduct.MinInstallmentRate * Base
If {DEL PCG-2895}OP, OD, PCL{/DEL}{ADD PCG-2895} base type is in list of base types according to the rule Search for Allowed Base Types by Usage for usage = "REMI"{/ADD} then Base  = ProvidedCreditLimit else raise error.
Round MMI using parameters
- Product.RevolvingProduct.MinInstallmentRounding
- Product.RevolvingProduct.MinInstallmentRoundingScale

## 🔗 Connections (4)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}Evaluate basic financial parameters of Product Offer]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- → Dependency: [[Search for Allowed Base Types by Usage]]

## 📊 Appears In (4 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of Basic Financial Parameters of Product Offer
- Custom: Financial calculations
