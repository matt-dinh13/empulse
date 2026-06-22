---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation"
domain: "Modules"
element_id: 1814852
diagrams: 5
connections: 8
tags:
  - requirement
  - modules
---

# 📋 {MOD}Annuity base amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Auxiliary evaluations/Financial calculations/Annuity and Interest Calculation

## 📝 Notes

AnnuityBaseAmount is used as an auxiliary attribute for the calculation only, it is not stored as financial attribute of a product offer. 
It is calculated only for loans with ProductType = CEL {ADD PCG-2824}or (ProductType = SAI and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true){/ADD}.

Steps:
System calculates AnnuityBaseAmount:
If the Annuity base amount is calculated for already signed Contract then
- AnnuityBaseAmount = Contract.FinancialParameters.ProvidedCreditAmount
else
- AnnuityBaseAmount = ProvidedCreditAmount calculated in previous steps of offer calculation

System includes (subtracts) subventions allocated to client:
AnnuityBaseAmount = AnnuityBaseAamount - SubventionPartner(SPPAC) - SubventionManufacturer(SPMMAC) - SubventionHomeCredit(SHCAC), where SPPAC, SPMAC and SHCAC are defined by Subvention amount definition.

## 🔗 Connections (8)

- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Service fees amount definition]]
- → Dependency: [[{MOD}Subvention amount definition]]
- ← Dependency: [[{DEL}Fixed flat rate and fixed number of advance payments (FFR_AI)]]
- ← Dependency: [[{MOD}Standard (STND)]]
- ← Dependency: [[{DEL}Calculated flat rate (CFR)]]
- ← Dependency: [[Recalculate Annuity in OFP]]
- ← Dependency: [[{MOD}01.191 Process installment schedule generation after disbursement]]

## 📊 Appears In (5 diagrams)

- Custom: Annuity calculations
- Custom: Offer Calculation algorithm - STANDARD
- Custom: Offer calculation algorithms - CFR, CFR_CP, FFR_AI
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
