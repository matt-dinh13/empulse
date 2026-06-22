---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-19215 (CLM-5374) Registration tab with Registration ticket support"
domain: "Requirements Model"
element_id: 1857480
diagrams: 5
connections: 2
tags:
  - enumeration
  - requirements-model
---

# 📝 {MOD}Contract Management Global Parameter

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-19215 (CLM-5374) Registration tab with Registration ticket support

## 📝 Notes

Definition of Global Parameters for functionality of Contract Management

## 🔗 Connections (2)

- ← Dependency: [[Global Parameter]]
- → Dependency: [[08.340 Show Insurance offers for loan contract (UseCase 1879847)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-19215 (CLM-5374) Registration tab with Registration ticket support
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Logical: CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Logical: Contract Management Global Parameter
- Logical: Global parameters - OVERVIEW

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}HideDocumentPrintouts | string | 0 |
| {ADD}InstallmentPlanSchemeForJFS | string |  |
| {ADD}SeparateFutureInterest | boolean | false |
| {MOD}HideClientPhoneNumbers | boolean |  |
| {MOD}PartyScoringAfterSignThreshold | int | -1 |
| ChangeBankAccountForDCHAfterEditDDM | boolean |  |
| ChargePenaltiesOverLimit | boolean | false |
| ConditionChangeFlagContractStatuses | string |  |
| ContractCancelReasonForAPI | string |  |
| CreditLimitFinishProcessingLength | int |  |
| IsPenaltiesSumLimit | boolean |  |
| DaysBeforeDueDate |  |  |
| DaysBeforeInstallmentDate |  |  |
| DDMCreationOverlap |  |  |
| DDMDividedFilesLocation |  |  |
| DDMLimitBase |  |  |
| DDMLimitMultiple |  |  |
| DDMLimitMultipleREL |  |  |
| DebtTrackingRoundMethod | Rounding | MATH_UP |
| Deduct Interest Overcharge | boolean |  |
| DebtTrackingRoundScale | Rounding Scale Type | 0,01 |
| DefaultDDDueDateOffset |  |  |
| EarlyRepaymentTolerance | int |  |
| enhanceRegistrationQueueV3 | boolean | 0 |
| FilterMarketingOffersByAvailabilityForClientDetail |  |  |
| GetOverpaymentDueDate | boolean | FALSE |
| LDAP_REG_QUEUE_ROLE | string |  |
| MaxFileSize |  |  |
| MaxNumberOfContractsInPackage |  |  |
| MinDPDToWriteOff (obsolete) | int |  |
| OneDDMForAllContracts |  |  |
| PairToPrepaymentTillDueDate |  |  |
| QueryJFS | boolean | FALSE |
| ParamDebtToleranceAmount |  |  |
| PrintContractPackageTimeout |  |  |
| PrintDDMForEachContract |  |  |
| ReimbursedContractDateCreated |  |  |
| ShowCreditLimit | boolean |  |
| SmallOverpaymentAmount | Financial Amount |  |
| SmallUnderpaymentAmount |  |  |
| SortInstalmentPartsBySpecificDate |  | false |
| ShowJFS | boolean | FALSE |
| DefaultJFSPartnerCode | string |  |
| RecalculatePirsOnPayHol | boolean | true |
| RejectChangeDCHTicketSubtype | string |  |
| RevokeChangeDCHTicketAccRole | string |  |
| RevokeChangeDCHTicketSubtype | string |  |
| RejectChangeDCHTicketAccRole | string |  |
| VerifyChangeDCHTicketAccRole | string |  |
| VerifyChangeDCHTicketSubtype | string |  |
| VerifyChangeOfDisbChannel | boolean |  |
| {ADD}groupAccountNumberChars | int | 0 |
| {ADD}RecalculationReasonsForEEDChange | string | empty |
| {ADD}ShiftLastDueDate | boolean | false |
| AmmilNotification | boolean | false |
| DelayAgreementLobDeletion | int |  |
| GenerateDailyISIR |  | false |
| GenerateWriteOffNotification |  | false |
| IsRecalcResUpdateExtraInstDD |  |  |
| LoxonInstallmentPartTypesAsFee |  |  |
| LoxonPushDebtLimit |  |  |
| LoxonTariffItemTypesAsFee |  |  |
| ParamDebtToleranceAmount |  |  |
| CommHistoryLength | int | null |
| CommHistFilterBSL | boolean | FALSE |
| CommHistFilterCCH | boolean | FALSE |
| CommHistFilterCLC | boolean | FALSE |
| CommunicationHistorySelectedSystems | string | empty |
| CommHistVBOTUsed | boolean | FALSE |
| CommResultDetails | string | null |
| ISalg_Basic_GenPartially_RecalcReason | string |  |
| ISalgorithmSupportingFirstPeriodDefaultLength | string |  |
| ISrecalculationReasonForPIRUpdate | string |  |
| {DEL}activateRegistrationTickets | string | FALSE |
| {DEL}DocumentMistakeTicketTypeCode | string |  |
| {DEL}FrontOfficeAccessRoleCode | string |  |
| {DEL}OnlineContractRegistration | boolean |  |
| {ADD}DebtToleranceAmountLastInst | int |  |
