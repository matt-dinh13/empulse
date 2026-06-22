---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Global system parameters"
domain: "Analysis Model"
element_id: 1822936
diagrams: 2
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 {MOD}Product Catalog Global Parameter

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Global system parameters

## 📝 Notes

Definition of Global Parameters for functionality of Product Catalog.

## 🔗 Connections (1)

- ← Dependency: [[Global Parameter]]

## 📊 Appears In (2 diagrams)

- Logical: Global parameters - OVERVIEW
- Logical: Product Catalog Global Parameter

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ProductOfferRequestExpirationHours | int |  |
| MaximalNumberOfOffers | int |  |
| AnnuityConstant | Number |  |
| UseSalesPackage | boolean | False |
| CheckSalesroomService | boolean | True |
| UseServiceSubvention | boolean | False |
| AnnuityRoundingMethod | Rounding |  |
| AnnuityRoundingScale | Rounding Scale Type |  |
| IncludeDocInProductCalculator | boolean |  |
| InstallmentLowLimit | Financial amount |  |
| VersionOfReleasedProductInitialSetting | int |  |
| MaxProductOffersCEL | int |  |
| MaxProductOffersREL | int |  |
| OfferProductsWithMissingDocuments | boolean |  |
| ProductOffersSortingPreference | string |  |
| RequireAtLeastPrimaryDocuments | boolean |  |
| SubventionDiscountDefault | boolean |  |
| UseOnlyBoundProductsForCampaign | boolean | False |
| GIFTPCoveredByInterestDefault  | boolean |  |
| GIFTPKeepAllInstallmentsDefault  | boolean |  |
| PreferredDueDayKey | text |  |
| PreferredDueDaysMapCEL | text |  |
| PreferredDueDaysMapREL | text |  |
| FloatingDueDate | boolean | False |
| UseOfferRepository | boolean | False |
| OfferExpirationDays | integer | 0 |
| UseDownPaymentCheck | boolean | 0 |
| UseFinancingScheme | boolean | False |
| UseFinancingSchemeCEL | boolean | False |
| AllowDayCountMethods | boolean | False |
| SubventionsPerCommodityType | boolean | False |
| IncludePrimarySelectedInsurances | boolean | False |
| InsuranceVariantsRequiredDefault | boolean | False |
| ManualAIRCalculator | boolean | False |
| FilterRELOffersWithoutIP | boolean | False |
| CalculateBillingDayFromAM | boolean | False |
| ProductSetMandatory | boolean | False |
| CommodityPriceLimit | boolean | False |
| AllowEqualAnnuityISAlgorithm | boolean | False |
| UseFinancingSchemeRELVariants | boolean | True |
| MaximalProductOfferInsuranceCombination | int | 10 |
| InsuranceCalculationCombinationLimit | int | 20 |
| UseExternalRelOfferCalculation | boolean | False |
| MtcaccServiceUsage | boolean | false |
| OfferStoreSkippedEntryPoints | string | False |
| UseSubventionPurpose | boolean | false |
| InsuranceOnOfferDurationLimit | string | False |
| CommodityValidationSkipOnUpdate | boolean | false |
| GenerateSystemEventOnSNMEntityChange | boolean | true |
| ExcludeProductVariantWithoutPricingCategory | boolean | false |
| {ADD}UseHighestDiscoutOnly | boolean | False |
| CommodityValidationCancelation | boolean | False |
| SalesroomProductAssignmentUI | boolean | true |
