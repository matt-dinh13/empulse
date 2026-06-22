---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations"
domain: "Modules"
element_id: 1877743
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Annuity base without Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations

## 📝 Notes

{ADD PCG-5652/}
For country: ID
Based on Annuity base amount definition 

AnnuityBaseAmountWithoutInsurance is used as an auxiliary attribute for the calculation only, it is not stored as financial attribute of a product offer. 
It is calculated only for loans with ProductType = CEL.

Steps:
System calculates AnnuityBaseAmountWithoutInsurance as
ProvidedCreditAmountWithoutInsurance calculated in previous steps of offer calculation minus Subventions allocated to client

AnnuityBaseAmountWithoutInsurance = ProvidedCreditAmountWithoutInsurance - SubventionPartner(SPPAC) - SubventionManufacturer(SPMMAC) - SubventionHomeCredit(SHCAC), where SPPAC, SPMAC and SHCAC are defined by Subvention amount definition.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Standard (STND)]]
- → Dependency: [[{MOD}Subvention amount definition]]

## 📊 Appears In (3 diagrams)

- Custom: Financial calculations without insurance
- Custom: Offer Calculation algorithm - STANDARD
- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
