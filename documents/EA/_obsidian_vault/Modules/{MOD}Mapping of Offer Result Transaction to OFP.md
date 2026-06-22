---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result"
domain: "Modules"
element_id: 1341762
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {MOD}Mapping of Offer Result Transaction to OFP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result

## 📝 Notes

Mapping of Offer Result Transaction to OFP
RELIP Service Variant = OFP.OfferRELIPService.OfferRELIPServiceVariant.RELIPServiceVariantTerm.RELIPServiceVariant.Number
TransactionType = OFP.InitialTransactionType
DownPayment = OFP.NetCashPayment
CashPayment = OFP.CashPayment
TotalPrice = OFP.TotalPrice
NetTransactionAmount = OFP.NetCreditAmount
ProvidedTransactionAmount = OFP.ProvidedCreditAmount
StartOfInterestPeriod = null
Annuity = OFP.Annuity
TotalMonthlyPayment = OFP.TotalMonthlyPayment
TotalPaymentPerCredit = OFP.TotalPaymentPerCredit

For CEL: 
InstallmentPlanType = null
AnnuityRepaymentAlgorithm = OFP.InstallmentScheduleMethod
Term = OFP.Term

For REL: 
InstallmentPlanType = OFP.OfferRELIPService.OfferRELIPServiceVariant.RELIPServiceVariantTerm.RELIPServiceVariant.InstallmentType
AnnuityRepaymentAlgorithm = OFP.OfferRELIPService.OfferRELIPServiceVariant.RELIPServiceVariantTerm.RELIPServiceVariant.RELIP.Service.InstallmentPlanMethod
Term = OFP.OfferRELIPService.OfferRELIPServiceVariant.RELIPServiceVariantTerm.Term

Mapping of Offer Result Transaction Subvention to OFP
BaseAmount = null
ManufacturerTotalSubvention = OFP.OfferSubventionItem.ItemAmount where OFP.OfferSubventionItem.Subvention.Participant = M
ManufacturerClientSubvention = OFP.OfferSubventionItem.ChargedToClient where OFP.OfferSubventionItem.Subvention.Participant = M
PartnerTotalSubvention = OFP.OfferSubventionItem.ItemAmount where OFP.OfferSubventionItem.Subvention.Participant = P
PartnerClientSubvention = OFP.OfferSubventionItem.ChargedToClient where OFP.OfferSubventionItem.Subvention.Participant = P
{ADD PCG-1283}
HomeCreditTotalSubvention = OFP.OfferSubventionItem.ItemAmount where OFP.OfferSubventionItem.Subvention.Participant = HC
HomeCreditClientSubvention = OFP.OfferSubventionItem.ChargedToClient where OFP.OfferSubventionItem.Subvention.Participant = HC
{/ADD}
Discount = OFP.SubventionDiscount

Mapping of Offer Result Transaction Repayment to OFP

For CEL:
Number = OFP.OfferInstallment.InstallmentNumber
EndOfInterestPeriod = null
DueDate = OFP.OfferInstallment.DueDate
DueDateCustomer = OFP.OfferInstallment.DueDateCustomer
AIR = OFP.InterestRate
PrincipalAmount = OFP.OfferInstallment.OfferInstallmentPart.Amount where PartType = S 
InterestAmount = OFP.OfferInstallment.OfferInstallmentPart.Amount where PartType = I 
FeeAmount = OFP.OfferInstallment.OfferInstallmentPart.Amount where PartType = F 

For REL:
Number = OFP.OfferRELIPService.OfferRELIPServiceVariant.OfferRELIPServiceInstallment.Number
EndOfInterestPeriod = OFP.OfferRELIPService.OfferRELIPServiceVariant.OfferRELIPServiceInstallment.EndOfInterestPeriodDate
DueDate = OFP.OfferRELIPService.OfferRELIPServiceVariant.OfferRELIPServiceInstallment.DueDate
DueDateCustomer = null
AIR = OFP.OfferRELIPService.OfferRELIPServiceVariant.RELIPServiceVariantTerm.(If Number <= InitTerm then InitAIR else AIR)
PrincipalAmount, InterestAmount, FeelAmount = OFP.OfferRELIPService.OfferRELIPServiceVariant.OfferRELIPServiceInstallment.(PrincipalAmount, InterestAmount, FeeAmount)

## 📊 Appears In (1 diagrams)

- Logical: Offer Result Transaction
