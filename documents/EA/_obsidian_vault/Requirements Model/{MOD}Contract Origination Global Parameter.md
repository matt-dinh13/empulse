---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK"
domain: "Requirements Model"
element_id: 1822997
diagrams: 7
connections: 1
tags:
  - enumeration
  - requirements-model
---

# 📝 {MOD}Contract Origination Global Parameter

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK

## 📝 Notes

Definition of Global Parameters for functionality of Contract Origination.

## 🔗 Connections (1)

- ← Dependency: [[Global Parameter]]

## 📊 Appears In (7 diagrams)

- Custom: LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK
- Custom: LOR-8869 Removing of getBillingDayFromAM from Prepare documentation flow
- Custom: LOR-8961 CBL-18782 Masking of PII in PIF
- Custom: LOR-8969 - Remove global parameter HO_DDM_FORM_FROM_DSM
- Custom: LOR-9339 Consolidation of external contract
- Logical: Contract Origination Global Parameter
- Logical: Global parameters - OVERVIEW

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Prefill AF from search | int |  |
| AllowToAddClientsDocAF |  |  |
| BombInBank |  |  |
| CifTimeout |  |  |
| CollectedDataAreUnofficial | boolean | FALSE |
| ForceDataToCIF | boolean | FALSE |
| InProgressContractDateCreated |  |  |
| LAP photo history contracts | int |  |
| LAP photo history length | date |  |
| LAPLoanActive |  |  |
| LAPLoanCanceled |  |  |
| LAPLoanRejected |  |  |
| LAPOpenCreditDays |  |  |
| LAP DebtTolerance |  |  |
| LAPScoringRequestShortTimeout |  |  |
| LAPUsePhoneExtension |  |  |
| MaxAgeOfTemporaryApplication |  |  |
| MaxPhotoSize |  |  |
| MaxGenerationOfVerificationCode | int |  |
| MinAmoutOfAdditionalContacts |  |  |
| PreferredWorkingHoursEnd |  |  |
| PreferredWorkingHoursStart |  |  |
| SetDataProtection | boolean | FALSE |
| UpdateClientDataMoment | string | CONTRACT_REGISTRATION |
| ValidateMinCountOfPrimDoc |  |  |
| ValidateUniquePhonesAF |  |  |
| VirtualProduct | string |  |
| DefaultStatementChannel | string |  |
| SkipOTPButtonDelay | integer |  |
| PrintConsentRequired | boolean | false |
| DefaultCreditOwner | string |  |
| RemoteChannel |  |  |
| MarketingOffersDefaultChannel | string |  |
| SkipOTPButtonEnabled | boolean |  |
| PrintDocCollated | boolean | false |
| MysteryShoppingTracking | boolean | false |
| ProductOffersDeleteBatchSize | integer |  |
| MaxNumberConsentVerificationCode | integer |  |
| GroupedOffers | boolean | false |
| FilterMarketingOffersByAvailability | boolean | false |
| MaxNumberAgreementVerificationCode | integer |  |
| XsellOfferCodePrefillEnabled | boolean |  |
| VisibilityOfMysteryShoppingContracts | int | 0 |
| MysteryShoppingContractStatus | string |  |
| LAP_SEND_CAMPAIGN | boolean |  |
| LAP_SEND_CLM | boolean |  |
| LAP_SEND_PCG | boolean |  |
| XsellRecalculationTimeout | integer | 0 |
| boundOfferDataInVector | boolean |  |
| MysteryShoppingRemotelyCreatedContractsHiding | boolean | false |
| RecalculationWaitingTime | integer | 60 |
| VisibilityOfMysteryShoppingRemotelyCreatedContracts | int | 0 |
| LenddoVerificationURL | string |  |
| filterRelatedPersonsPrefillByRelationType | string |  |
| LenddoAction | string | redirect |
| LenddoScriptId | string |  |
| HideContractStatuses |  |  |
| RepeatedPurchaseEnabled | boolean |  |
| SignContractAfterVerification | boolean |  |
| EnforceXsellOfferRecalculation | boolean |  |
| ValidateCommodityTypeOnProductCalc | boolean |  |
| SupplementaryPrefillAvailabilityDays |  |  |
| faceRecognition.photoTakingCountThreshold | integer | 0 |
| jointLending.manualContractSigningDisabled | boolean | FALSE |
| checkOfferInOFS | boolean |  |
| RecalculateAnnuityBeforeSign | boolean | False |
| dataSource.getPartyDataFromCIF | boolean | FALSE |
| LAPACTIVELOAN2 | string |  |
| BasicEvaluationTimeout | integer |  |
| StoreCLXRejectionReason | boolean |  |
| validateImeiDuplicityInApplicationCommodityWS | boolean |  |
| VisibilityOfContracts | integer |  |
| partyScoring.autoScoringAfterCancellation | boolean | FALSE |
| CurrentSalesroomForSBA | boolean | FALSE |
| MaxGenerationOfVerificationCodeForAgreementViaIVR | number |  |
| MaxGenerationOfVerificationCodeForConsentViaIVR | number |  |
| ExcludedClientTitles | string |  |
| GenerateOtpButtonDelay | int |  |
| SendSMSToSAMobilePhone | string |  |
| MaxMultiVerifCodeConsent | int |  |
| validateCommodityImeiDuplicity |  | FALSE |
| useIVRProcess | boolean | FALSE |
| {DEL}partyOffers.filterByEntryPoint | boolean | TRUE |
| HideClientDocuments | boolean |  |
| HideClientData | boolean |  |
| ClientDataValidityLength | integer |  |
| customerData.customRelatedPersonPhoneNumberVerificationLevelEnabled | boolean | FALSE |
| PhotoAmountLimitInComponent | integer |  |
| ClientPhotoBeforeDoc | boolean |  |
| customerData.customRelatedPersonPhoneNumberVerificationLevelValue | int | 10 |
| DownloadDocumentInAF | boolean |  |
| MaxNumberBankAccountVerificationAttempts | integer |  |
| HideContractByStatusTransitionDate | boolean | TRUE |
| ShowPdfWithoutDownloading | boolean |  |
| JointLenderRequiredForCEL | boolean | FALSE |
| MaxGenerationOfVerificationCodeForRBPScoring | string |  |
| applicantMergeMoment | enum | NEVER |
| AUIMaskedFields | string |  |
| RBPStorageEntity | enum | CUSTOMER |
| showDeliveryManagementTab | boolean | FALSE |
| dataSource.getPartyCKYCNumberFromCIF | boolean | FALSE |
| HoContractDataFromDSM | boolean | FALSE |
| DataSourceParallelProcessing | boolean | TRUE |
