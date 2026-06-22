---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation"
domain: "Modules"
element_id: 1311149
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculate RELIP offers for Initial Transaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme/RELIP evaluation

## 📝 Notes

// Calculates offers for Installment plan for Initial Transaction for product with assigned RELIP service
Input:
- REL Product sub-variant
- beforehand calculated values of Offer Financial Parameter (OFP) for REL Product sub-variant
- offer preferences (for Primary or Alternative offer):
--- RequiredTermMin, RequiredTermMax (in LAP vector represented as paymentNum_Min, paymentNum_Max)
--- RequiredTotalMonthlyPaymentMin, RequiredTotalMonthlyPaymentMax (in LAP vector represented as annuity_Min, annuity_Max)

Output:
- offers in structure defined by Offer RELIP Service Variant and Offer RELIP Service Variant Installment

If OFP.InitialTransactionType = POS then
- RequiredTransactionType = IPD
else
- RequiredTransactionType = ICD

RELIPVariantTerm is defined as a variant of Offer Service of type RELIP (the service was selected in step Service determination). 
Parameters of the RELIPVariantTerm are defined by combination of 

	
- RELIP Service
	
- eligible RELIP Service Variant 
	
- eligible RELIP Service Variant Term

Only such RELIP Service Variant is eligible where
- RELIPServiceVariant.TransactionType = RequiredTransactionType
- and OFP.NetCreditAmount is in interval AmountInterval
- and current date is in DateInterval
Only such RELIP Service Variant Term is eligible where
- RELIPServiceVariantTerm.Term is in TermInterval
Intervals for evaluation of eligibility are defined as follows:
- AmountInterval is defined by parameters of RELIPServiceVariant <TransactionAmountMin, TransactionAmountMax).
- DateInterval is defined by parameters of RELIPServiceVariant <TransactionDateMin, TransactionDateMax>.
- TermInterval is defined by preferences <RequiredTermMin, RequiredTermMax>.
Upper limit of AmountInterval is not included in interval. 
Both limits of DateInterval and TermInterval are included in intervals. 
Any of limits can be missing then interval is left or/and right opened.

If no eligible RELIPVariantTerm is found then algorithm ends.

Calculate TransactionAmount as OFP.NetCreditAmount.

Execute algorithm Evaluate dates for RELIP calculation with parameters:
- REL Product sub-variant
- RELIPVariantTerm.RELIPService
which returns
- FirstBillingDate 
- InstallmentDueDayShift 
- FirstDueDate
- FirstStartOfInterestPeriodDate 
- FirstEndOfInterestPeriodDate 

For each eligible RELIPVariantTerm generate Offer for initial transaction IP according to rule Evaluate offer for RELIP Variant Term with parameters:
- RELIPVariantTerm 
- TransactionAmount
- FirstBillingDate 
- InstallmentDueDayShift 
- FirstDueDate
- FirstStartOfInterestPeriodDate 
- FirstEndOfInterestPeriodDate 

Then delete Offers which do not meet following restrictions:
- Offer.TotalMonthlyPayment is in TotalMonthlyPaymentInterval.
TotalMonthlyPaymentInterval is defined by preferences <RequiredTotalMonthlyPaymentMin, RequiredTotalMonthlyPaymentMax>.
Both limits of TotalMonthlyPaymentInterval are included in intervals. Any of limits can be missing then interval is left or/and right opened.
- All amounts in Offer.OfferRELIPServiceVariantInstallment (PrincipalAmount, InterestAmount, FeeAmount) are greater or equal to 0.

Return generated Offers.

## 🔗 Connections (3)

- → Dependency: [[Evaluate offer for RELIP Variant Term]]
- → Dependency: [[Evaluate dates for RELIP calculation]]
- ← Dependency: [[Evaluation of product sub-variant]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of RELIP offers for Initial Transaction
- Custom: Evaluation of product sub-variant
