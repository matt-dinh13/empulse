---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1879048
diagrams: 4
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Calculation of Presented IR for Product Offer

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Input: 
- ProductType in offer
- Financial parameters of offer (OFP) - reference

Output: 
- set of  PIR values (percentage) assigned to FP  PIRSettings.Code


Create interface structures Presented IR Parameters (Par) for PIR calculation.

// Standard PIRs
If ProductType = CEL then fill interface according to the rule Collection of parameters for Presented IR for Product Offer with OFP and Par as parameters. 

Calculate set of PIRs according to algorithm Calculation of Presented IR types with parameters:
- ProductType from input
- Case = 'STANDARD'
- OFP from input
- Par
and add returned values to the result set.

// PIRs in case GIFT_PAYMENT
If a Service of type GIFTP was selected for the offer then:
1. N = Service.GiftPaymentService.NumberOfGiftPayments.
2. Simulate gift payments, i.e. update interface structures Par prepared in previous steps:
- Par.Term = Par.Term - N
- Remove last N items from Par.Presented IR Cash Flow
3. Calculate set of PIRs according to algorithm Calculation of Presented IR types with parameters:
- ProductType from input
- Case = 'GIFT_PAYMENT'
- OFP from input
- Presented IR Parameters (Par)
and add returned values to the result set.
// End of case GIFT_PAYMENT

## 🔗 Connections (5)

- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}Offer recalculation]]
- ← Dependency: [[{MOD}Calculate product offer]]
- → Dependency: [[Calculation of Presented IR types]]
- → Dependency: [[Collection of parameters for Presented IR for Product Offer]]

## 📊 Appears In (4 diagrams)

- Custom: Calculate product offer
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: Offer recalculation
- Use Case: Prepare documentation to sign
