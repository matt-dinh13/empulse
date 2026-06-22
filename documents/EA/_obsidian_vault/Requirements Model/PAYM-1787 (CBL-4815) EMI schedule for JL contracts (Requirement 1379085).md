---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts"
domain: "Requirements Model"
element_id: 1379085
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1787 (CBL-4815) EMI schedule for JL contracts

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts

## 📝 Notes

The primary goal of this CBL is to make installment schedule in BSL compatible with Indian banking standards. This is important for the purposes of Joint Lending project where HCIN loans are co-financed by external financial partners (banks). HCIN needs to make the reconciliation process between itself and the financial partners as simple as possible in order to avoid errors and comply with all the rules of the Indian national bank.

The secondary goal is to make installment schedule generation process more flexible and generic in order to be able to cover various business requirements of HOSEL countries in the future (e.g. new Joint Lending partner in India). This will be achieved by a new installment schedule algorithm Equal Annuity. The new algorithm will be able to cover all the existing algorithms except for the Equal Principal (specific only for KZ). It means that algorithms Basic, Extended1 and Annuity Principal will be covered by the new algorithm.

Equal Annuity algorithm will have following features:
* It will be compatible with all available day count methods for CEL (30/360, ACT/360, ACT/365F, ACT/ACT).
* It will be ready for using Financing scheme and Installment plan scheme instead of Product variant (once CBL-1672 is implemented).
* It will throw a specific exception in case that the calculated interest for the first installment is higher than annuity.

Following settings will be available for the algorithm:
* IncludeDeferredInterest - deferred interest is an additional interest for the extra days in the first installment in case it's longer than one month, possible values are:
** NO - do not calculate deferred interest
** IN_ANNUITY - include deferred interest in the interest amount of the first installment while keeping its amount the same as other installments (in this case the deferred interest has to be taken into account also during the annuity calculation)
** IN_FIRST_INST - include deferred interest in the interest amount of the first installment while raising its amount
* InterestRoundingScale - rounding scale for interest part of installment, "1000" means rounding to thousands (12345 -> 12000), "0.001" means rounding to thousandths (1.2345 -> 1.235)
* InterestRoundingMethod - method of rounding of interest part of installment, one of UP/DOWN/MATH/TRUNC
* RoundingScale - rounding scale for the whole installment
* RoundingMethod - method of rounding of the whole installment
* LastAnnuityRoundingMode - method of rounding of the whole last installment
* KeepEqualLastInstallmentAmount - whether the last installment amount should be calculated from the remaining principal or from annuity (true/false)
* RecalculateInterestRate - whether AIR should be recalculated for the rounded annuity (true/false)

Until the new algorithm is fully used, a special Installment plan scheme will be created in the database for HCIN Joint Lending purposes. It will hold the desired settings for installment schedules of co-financed contracts in India.

The PCG team will:
* add the new algorithm EQUAL_ANNUITY to the enumeration;
* show/hide the algorithm on GUI based on a value of global parameter allowEqualAnnuityISAlgorithm (true/false);
* extend the Interest factor ACT algorithm with 30/360 day count method: interest factor = number of days between start_date and end_date (calculated by Calculate number of days for 30/360 day count convention) / 360;
* remove the offer from the offer list in case that the calculated interest for the first installment is higher than annuity.

## 🔗 Connections (2)

- ← Generalization: [[CONF EMI schedule for JL contracts]]
- ← Generalization: [[DEV EMI schedule for JL contracts]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1787 (CBL-4815) EMI schedule for JL contracts
