---
type: Class
stereotype: "abstract"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1820927
diagrams: 8
connections: 38
tags:
  - class
  - requirements-model
---

# 🔷 ApplicationSystemEvent

> **Type**: Class · **Stereotype**: «abstract»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 🔗 Connections (37)

- ← Generalization: [[ApplicationDeduplicationSE]]
- ← Generalization: [[RBPUpdateStartedSE]]
- ← Generalization: [[ClientRejectedSE]]
- ← Generalization: [[OfferRejectedWithAlternativeSE]]
- ← Generalization: [[OTPSentSE]]
- ← Generalization: [[ApplicationRejectedFinalSE]]
- ← Generalization: [[ClientFoundSE]]
- ← Generalization: [[Application1BODSubmittedSE]]
- ← Generalization: [[OfferDisplayedSE]]
- ← Generalization: [[ApplicationEvaluationFailedSE]]
- → Generalization: [[SystemEvent]]
- ← Generalization: [[ApplicationDataSubmittedSE]]
- ← Generalization: [[ApplicationCanceledAutomaticallySE]]
- ← Generalization: [[Application1SPOpenedSE]]
- ← Generalization: [[ApplicationUpdatedSE]]
- ← Generalization: [[OfferApprovedWithAlternativeSE]]
- ← Generalization: [[OffersCalculatedSE]]
- ← Generalization: [[Application2BODOpenedSE]]
- → Dependency «processed by»: [[{MOD}System event processing]]
- ← Generalization: [[ApplicationApprovedFinalSE]]
- ← Generalization: [[Application1BODOpenedSE]]
- ← Generalization: [[OTPVerifiedSE]]
- ← Generalization: [[RBPFormOpenedSE]]
- ← Generalization: [[ApplicationSavedSE]]
- ← Generalization: [[ApplicationPreApprovedSE]]
- ← Generalization: [[InformationSentSE]]
- ← Generalization: [[ApplicationSignedSE]]
- ← Generalization: [[Application2BODSubmittedSE]]
- ← Generalization: [[ApplicationApprovedSE]]
- ← Generalization: [[ApplicationCanceledSE]]
- ← Generalization: [[Application1SPSubmittedSE]]
- ← Generalization: [[OfferChosenSE]]
- ← Generalization: [[SendLoanSummaryNotificationSE]]
- ← Generalization: [[ApplicationRejectedSE]]
- ← Generalization: [[ApplicationDocumentationPreparedSE]]
- ← Generalization: [[ClientIdentifiedSE]]
- ← Generalization: [[ApplicationCreatedSE]]

## 📊 Appears In (8 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Logical: Application system events - application form
- Logical: Application system events - application process
- Logical: Application system events - client
- Logical: Application system events - evaluation results
- Logical: Application system events - RBP
- Logical: COMMON for system events
- Use Case: System events processing
