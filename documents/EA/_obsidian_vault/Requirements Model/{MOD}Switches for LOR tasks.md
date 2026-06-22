---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9954 [VAS] Standalone PPI as a second loan/LOR-10052 Link in application detail to related contract"
domain: "Requirements Model"
element_id: 1827886
diagrams: 42
connections: 0
tags:
  - enumeration
  - requirements-model
---

# 📝 {MOD}Switches for LOR tasks

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9954 [VAS] Standalone PPI as a second loan/LOR-10052 Link in application detail to related contract

## 📊 Appears In (42 diagrams)

- Custom: LOR-10052 Link in application detail to related contract
- Custom: LOR-10198 Integration to new version of PIF endpoint
- Custom: LOR-10227 Income Collection for TS Sourcing
- Custom: LOR-10350 Application form - get rule setting for document type
- Custom: LOR-10356 Increase length of address fields in BSL
- Custom: LOR-8052 Application detail - edit document
- Custom: LOR-8053 Application detail - add document
- Custom: LOR-8055 Application detail - set document security level
- Custom: LOR-8057 Application detail - client documents in client tab
- Custom: LOR-8484 GSTCalculatorService direct integration
- Custom: LOR-8797 - Remove call to LAP for getting the evaluation information
- Custom: LOR-8823 - Hide evaluation information field on application detail
- Custom: LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK
- Custom: LOR-8965 Check running scoring
- Custom: LOR-8966 Run RBP via Zeebe
- Custom: LOR-9002 Generate Installment schedule via IS module
- Custom: LOR-9003 Store generated Installment schedule in IS module
- Custom: LOR-9009 Prepare IS data for creation of Installment and Installment Part in sign UC
- Custom: LOR-9063 - Remove temporary switch useDirectGstIntegration
- Custom: LOR-9118 - MFI_New fields addition
- Custom: LOR-9159 - MFI_Validations for Monthly household income field
- Custom: LOR-9162 Disabling client's primary mobile number in ORBP
- Custom: LOR-9186 Upload contractual documentation via DMS
- Custom: LOR-9214 Remove getDocumentFromDMS switch
- Custom: LOR-9292 MFI - Enable Net Monthly income
- Custom: LOR-9296 ApplicationManagementWS: ignore raw data for documents in requests for v21
- Custom: LOR-9360 Remove temporary switch useSingleOtpForContractSign
- Custom: LOR-9371 - Update salesroom on application and contract via API
- Custom: LOR-9420 - Adjust storing of document signing method
- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- Custom: LOR-9428 Prepare agreement: ignore request if another prepare is running
- Custom: LOR-9436 Calculate offer for TopUp
- Custom: LOR-9489 DDM source - new ddm
- Custom: LOR-9501 to allow capturing industry for all economical statuses
- Custom: LOR-9529 Calculator: field Loan purpose
- Custom: LOR-9540 PIF integrations for PDP Decree 13 tracking of consents
- Custom: LOR-9615 Product calculator UI: integrate fully to /customerOffer REST
- Custom: LOR-9665 Move switch showStructuredParameters
- Custom: LOR-9701 AF: disbursement setting in Salesroom
- Custom: LOR-9704 Application detail: select target type for disbursement
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Logical: Switches for LOR tasks

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| useXSellOfferCodeForIdentification | boolean |  |
| useDisbursementDataSourceType | boolean |  |
| showPdfWithoutDownloading | boolean |  |
| extendedAddressValidation | boolean |  |
| signContentViaPhoto | boolean |  |
| invalidateVerificationCode | boolean |  |
| UseExclusivityForCustomSearch | boolean |  |
| storeCheckProofs | boolean |  |
| validateConsAmountForFERDate | boolean |  |
| newDefinitionOfCommodityPanel | boolean |  |
| redirectToContractDetail | boolean |  |
| queryJFSv3 | boolean |  |
| {DEL}useApplicantInPif | boolean |  |
| controlIndividualDocumentSecurityLevel | boolean |  |
| maskPhoneNumbersInAF | boolean |  |
| handleOffersByOfferCodeinBSL | boolean |  |
| enableGetClientFinancialSituation | boolean |  |
| maskPhoneNumberInRBPProductCalculator | boolean |  |
| document.multipleContentFilesEnabled | boolean |  |
| faceRecognition.controlBySalesroomFeatureFlag | boolean |  |
| useDDMRest | boolean | FALSE |
| getApplicantDataFromPif | int | FALSE |
| reportConnectorVersion | string |  |
| createEmptyPaymentChannel | boolean | TRUE |
| filterPIRinDS | boolean | FALSE |
| dbEnumAddressOnly | boolean |  |
| useNewPaymentChannels | boolean |  |
| resumeScoringEnabled | boolean |  |
| applicationDetail.showReferenceApplicationNumber | boolean |  |
| getBeforeUpdateCustomerForRBP | boolean |  |
| onlineDisbursementAllowed | boolean |  |
| getQualificationCriteriaViaREST | boolean |  |
| useCardEvidenceREST | boolean |  |
| clientIdentification.searchForPreviousContracts | boolean | TRUE |
| generateInstallmentScheduleExternally | boolean | FALSE |
| checkAvailableDisbursementsOnSalesroom | boolean |  |
| checkLoanPurposeExtendedProperty | boolean | FALSE |
| saveOfferInstallmentsInternally | boolean |  |
| getSalesmenFromHSIS | boolean |  |
| uploadDocFilesWithoutCUID | boolean | FALSE |
| applicationDetail.dmsUploadFile | boolean |  |
| customerData.sendPaymentChannelToPIF | boolean | FALSE |
| isVodafoneOTPEnabledOnRBP | boolean |  |
| getOfferInstallmentExternally | boolean |  |
| sendInitialCuidForIdentification | boolean | FALSE |
| {DEL}useRemittandPhone | boolean |  |
| ScoringProductTypeDisplayed | boolean |  |
| workflowDrivenRBP | boolean |  |
| filterCommoditiesForMO | boolean |  |
| useOtpConsentForVilPartner | boolean |  |
| checkUserAssignedToSalesroom | boolean |  |
| enable-deprecated-ws |  |  |
| useBankAccountREST | boolean | TRUE |
| useBankAccountRestOnAppDetail | boolean | TRUE |
| useModelManagement | boolean |  |
| useClientCenterREST | boolean | FALSE |
| useProductCalculationData | boolean |  |
| evaluateHouseholdIncome | boolean | FALSE |
| prefillOnlyActiveDDM | boolean | TRUE |
| displayExpensesOnAF | boolean | FALSE |
| prepareDocumentation.createDocumentsInDMS | boolean |  |
| updateSalesroomOnApplicationUpdate | boolean | FALSE |
| displayNetIncomeOnAF | boolean |  |
| applicationDetail.dmsDeleteFile | boolean |  |
| handleDDMDocumentsAsContractDocuments | boolean | FALSE |
| applicationManagement.lockingEnabled | boolean | TRUE |
| useCustomerOfferRESTInCalculator | boolean |  |
| enableDDMSourceAndType |  |  |
| enableSendConsentNotification | boolean |  |
| prefillPrimaryMobileFromPIF | boolean |  |
| useCustomerOfferRESTInCalculator.topUpOnly | boolean |  |
| showStructuredParameters | boolean |  |
| ignoreEmployerRequiredOnAPI | boolean |  |
| {ADD}usePifApiV2 | boolean |  |
| enableDisbursementTargetType | boolean |  |
| enableDisbursementTargetTypeOnApplicationDetail | boolean |  |
| {ADD}useDmsApiForDocumentAttributes | boolean |  |
| useRelatedApplicationLink | boolean | TRUE |
| {ADD}Switch on new length validations | boolean |  |
| {ADD}useDmsApiForDocumentOperations | boolean | TRUE |
| {ADD}useDmsForDocRuleTypes | boolean |  |
| {ADD}useDmsApiForDocumentEditing | boolean |  |
| {ADD}updateClientSnapshotPrepareMaterials | boolean |  |
| {ADD}useDmsForClientIdentificationDocuments | boolean |  |
