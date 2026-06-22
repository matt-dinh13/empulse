---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model"
domain: "Analysis Model"
element_id: 1878735
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Check if contract is co-financed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model

## 📝 Notes

{ADD PAYM-1787 CBL-4815 /}

Input:
* Financial parameters - structure of financial parameters of offer/contract

Output:
* Contract is co-financed - true/false

Steps:
{DEL TIN-10719}1. If Offer_Financial_Parameters are passed on input then system calls CustomerMarketingOfferWS.GetCustomerMarketingOffer() with Offer_Financial_Parameters.Marketing_Offer_ID as parameter.
2. If GetCustomerMarketingOfferResponse.CustomerMarketingOffer.CustomerMarketingOfferData.CustomerMarketingOfferDataProduct.jointLendingPartner is null or empty, then system sets Contract is co-financed = false, else system sets Contract is co-financed = true.{/DEL}
{ADD TIN-10719}1. If Offer_Financial_Parameters are passed on input, then system finds all Contract->Relationship[.Archived = 0 and RoleType = 'JOINT_LENDER']->Party[.Archived = 0] for Financial parameters.Contract Code.
2. If system found at least one Party then system sets Contract is co-financed = true else system sets Contract is co-financed = false.{/ADD}
3. If Financial_Parameters (FP) are passed on input then system finds all Contract->Contract Party Role where Role Type = JFS_PARTNER and Archived = false.
4. If no Contract Party Role was found then system sets Contract is co-financed = false else system sets Contract is co-financed = true.
5. System returns Contract is co-financed.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Generate installment schedule algorithm]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate installment schedule
