---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module"
domain: "Requirements Model"
element_id: 1816723
diagrams: 6
connections: 2
tags:
  - enumeration
  - requirements-model
---

# 📝 {MOD}CLM feature flags

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module

## 📝 Notes

List of flags used to switch on/off sections of code of newly introduced functionalities in order to be able to go back to original solution if new functionality doesn't meet expectations/requirements of requestor (who may not have done UAT properly) or it's to be off on PROD env for reasons on business side, etc.

## 🔗 Connections (1)

- → Usage: [[CLM Feature Flag]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-17316 (CLM-5164) Registration based on REM module
- Custom: CBL-17584 (CLM-5227) BOS/Zeebe implementation of PST: consumers calling new APIs Pt 1
- Custom: CBL-7209 (CLM-2456) FER processing queue
- Custom: CBL-8047 (CLM-2590) Disable CANCEL button post free lookup period for EW product
- Custom: CBL-8838 (CLM-2731) Adding Cancellation Date on ContractFullInfo JMS
- Logical: CLM Feature Flags

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}useRemForRegistrationTab | boolean | TRUE |
| allowAdditionalAttributesInOfferResponse | boolean | FALSE |
| asyncContractActivation | boolean |  |
| celAccountTransactionsRequestRabbit | boolean |  |
| clientOfferOverZeebe | boolean |  |
| clientOfferWithoutLor | boolean |  |
| clmContractFullInfoBulkV6 | boolean | FALSE |
| clmContractFullInfoBulkV7 | boolean | FALSE |
| communicationFromClcModule | boolean |  |
| enableCLCModule | boolean | FALSE |
| enableInsuranceContractFinishOnSE | boolean |  |
| enableSAIWithInstallments | boolean | FALSE |
| externalIdInCommunicationRecords | boolean |  |
| sendCELAccountTransactionNotificationV2 | boolean | FALSE |
| sendPaymentChannelToPif | boolean | FALSE |
| sendPaymentChannelToPifViaRest | boolean |  |
| skipTerminationStatusSOAP | boolean | TRUE |
| useDebtCatalogueRest | boolean | FALSE |
| useDmsForContractDocTab | boolean |  |
| useNewDocumentDMSRel | boolean | FALSE |
| useOldContractDocTab | boolean |  |
| validateDDM | boolean | FALSE |
| validateRequiredDocumentAttributes | boolean | FALSE |
| {DEL}cfiSecuritizationClientOnChangeRabbit | boolean |  |
| {DEL}clmAsyncFerProcessingAfterRequest | boolean | FALSE |
| {DEL}clmCbl8047 | boolean | FALSE |
| {DEL}contractChangedEventFix | boolean |  |
| {DEL}createCommunicationForNewClient | boolean | FALSE |
| {DEL}enableContractFinishInComa | boolean |  |
| {DEL}enablePayOffInComa | boolean |  |
| {DEL}enableRegistrationInRem | boolean |  |
| {DEL}incomingPaymentsViaModuleRest | boolean |  |
| {DEL}loadOwnershipWithoutDatetime | boolean | TRUE |
| {DEL}recalculateDebtInfoAfterContractPaidWriteOff |  |  |
| {DEL}salesFeaturesRest | boolean |  |
| {DEL}sendActivationAccountRequestWithCommodities | boolean | FALSE |
| {DEL}sentNotificationForTerminatedContractViaExternalCETAndFER | boolean | FALSE |
| {DEL}updateClientDocumentsAfterContractSign | boolean | FALSE |
| {DEL}useEntrustmentLending | boolean | FALSE |
| {DEL}validateIncomeProof | boolean | FALSE |
