---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1314779
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Evaluation of Installment Plan for REL

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

// Generation of Installment Plans for ProductOffer

Inputs:
- ProductOffer with assigned SetOfFinancingSchemeVariant (defined by FinancingScheme.code + FinancingScheme.version + FinancingSchemeVariant.Number)
- LoanProvidingDate
- PreferredDay
- InstallmentDueDayShift 

Outputs:
ProductOffer with parameters of Installment Plan

OfferNumber = 1

calculate BillingDay using algorithm Billing day determination with parameters:
- Product
- PreferredDay

For each FinancingSchemeVariant from SetOfFinancingSchemeVariant execute following steps:

// Calling of AM module for generation of preliminary installment schedule 
Creates new request for IP generation (CalculateInstallmentPlanWithoutAccountRequest) with parameters (installmentPlanCalculationWithoutAccountDetailsDto):
- parameters.billingDay = ProductOffer.BillingDay
- parameters.dueDateShift = InstallmentDueDayShift from input
- parameters.fixedDueDay = PreferredDay
- parameters.transactionType = IPD for ProductOffer.initialTransactionType = POS or ICD for ProductOffer.initialTransactionType = CASH
- parameters.transferAmount = ProductOffer.NetCreditAmount
- values parameters.(financingSchemeCode, financingSchemeVersion, financingSchemeVariantNumber) from FinancingSchemeVariant 
- parameters.transferDate = current date
and send the request via InstallmentPlanWS.CalculateInstallmentPlanWithoutAccount

System receives response (CalculateInstallmentPlanWithoutAccountResponse).

If response.resultCode <> OK then continue with the next FinancingSchemeVariant

If OfferNumber > 1 then create a copy of ProductOffer from input else use ProductOffer from input.

// Save preliminary installment schedule in ProductOffer (OFP) 
OFP.Terms = response.financialParameters.tenor
OFP.TotalMonthlyPayment = response.financialParameters.regularInstallmentAmount
OFP.TotalPaymentPerCredit = response.financialParameters.totalAmount
OFP.InterestRate = response.financialParameters.annualInterestRate
OFP.InitialTransactionInterestRate = response.financialParameters.effectiveInterestRate

For each Installment from response.installmentList.installments

Create record in Offer Installment:
- InstallmentNumber = Installment.InstallmentNumber
- DueDate = Installment.DueDate
If Installment.principalAmount <> 0 then create record in Offer Installment Part with
- Amount = Installment.principalAmount
- PartType = Principal(S)
If Installment.interestAmount <> 0 then create record in Offer Installment Part with
- Amount = Installment.interestAmount 
- PartType = Interest(I)
If Installment.feeAmount <> 0 then create record in Offer Installment Part with
- Amount = Installment.feeAmount 
- PartType = Fee(F)

Continue with the next Installment

OfferNumber = OfferNumber + 1

Continue with the next FinancingSchemeVariant

// If no Installment Plan was successfully created then delete the Product Offer
If NumberOfOffers = 1 the delete ProductOffer from the set of generated offers

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Calculate product offer]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (3 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of IP for Product Offer with Financing Scheme
- Custom: Offer recalculation
