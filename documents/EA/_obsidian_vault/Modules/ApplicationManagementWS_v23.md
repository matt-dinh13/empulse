---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules"
domain: "Modules"
element_id: 1768146
diagrams: 17
connections: 57
tags:
  - interface
  - modules
---

# 🔶 ApplicationManagementWS_v23

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/BSL API/Business Rules

## 🔗 Connections (57)

- → Realisation: [[01.097 Cancel application externally]]
- → Dependency: [[CreateAndEvaluateApplicationRequest]]
- → Realisation: [[01.095 Create and evaluate application]]
- → Realisation: [[01.312 Update approved application (UseCase 1879295)]]
- → Dependency: [[SearchApplicationFault]]
- → Realisation: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- → Dependency: [[CancelApplicationRequest]]
- → Dependency: [[{MOD}EvaluateApplicationRequest]]
- → Dependency: [[SearchApplicationRequest]]
- → Dependency: [[RefuseOffersRequest]]
- → Dependency: [[SignAgreementRequest]]
- → Dependency: [[EvaluateApplicationResponse]]
- → Dependency: [[RefuseOffersResponse]]
- → Dependency: [[UpdateApplicationResponse]]
- → Realisation: [[01.313 Evaluate application (UseCase 1879292)]]
- → Dependency: [[AssignCardToApplicationResponse]]
- → Dependency: [[UpdateApplicationRequest]]
- → Dependency: [[CreateApplicationRequest]]
- → Dependency: [[SearchApplicationResponse]]
- → Dependency: [[GetAgreementFault]]
- → Dependency: [[CreateAndEvaluateApplicationResponse]]
- → Dependency: [[01.164 Search for application (UseCase 1879288)]]
- → Realisation: [[{MOD}01.310 Update application v9]]
- → Dependency: [[RefuseOfferFault]]
- → Dependency: [[AssignCardToApplicationRequest]]
- → Dependency: [[CreateApplicationFault]]
- → Dependency: [[CreateApplicationResponse]]
- → Dependency: [[CreateAndEvaluateApplicationFault]]
- → Dependency: [[UpdateOfferToApplicationAndEvaluateRequest]]
- → Dependency: [[UpdateApprovedApplicationResponse]]
- → Dependency: [[CancelApplicationResponse]]
- → Dependency: [[GetApplicationDataFault]]
- → Dependency: [[01.385 Assign card to application externally (UseCase 1879300)]]
- → Dependency: [[01.335 Get agreement documentation externally (UseCase 1819522)]]
- → Realisation: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- → Dependency: [[GetAgreementResponse]]
- → Realisation: [[01.167 Accept offer externally (UseCase 1827726)]]
- → Dependency: [[AcceptOfferRequest]]
- → Dependency: [[AcceptOfferResponse]]
- → Realisation: [[{MOD}01.099 Sign contract externally]]
- → Dependency: [[UpdateApplicationFault]]
- → Dependency: [[GetApplicationDataResponse]]
- → Dependency: [[AssignCardToApplicationFault]]
- → Realisation: [[01.168 Refuse offers externally]]
- → Dependency: [[GetApplicationDataRequest]]
- → Dependency: [[PrepareAgreeementRequest]]
- → Dependency: [[UpdateApprovedApplicationFault]]
- → Dependency: [[EvaluateApplicationFault]]
- → Realisation: [[{MOD}01.314 Create application externally]]
- → Dependency: [[UpdateOfferToApplicationAndEvaluateFault]]
- → Realisation: [[01.040 Get application data (UseCase 1879289)]]
- → Dependency: [[AcceptOfferFault]]
- → Dependency: [[UpdateApprovedApplicationRequest]]
- → Dependency: [[CancelApplicationFault]]
- → Dependency: [[UpdateOfferToApplicationAndEvaluateResponse]]
- → Dependency: [[GetAgreementRequest]]
- ← Dependency: [[{ADD}Get Application data]]

## 📊 Appears In (17 diagrams)

- Custom: Business Rules
- Logical: ApplicationManagementWS_v23
- Logical: ApplicationManagementWS_v23 - AcceptOffer
- Logical: ApplicationManagementWS_v23 - AssignCardToApplication
- Logical: ApplicationManagementWS_v23 - CancelApplication
- Logical: ApplicationManagementWS_v23 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v23 - CreateApplication
- Logical: ApplicationManagementWS_v23 - EvaluateApplication
- Logical: ApplicationManagementWS_v23 - GetAgreement
- Logical: ApplicationManagementWS_v23 - GetApplicationData
- Logical: ApplicationManagementWS_v23 - PrepareAgreeement
- Logical: ApplicationManagementWS_v23 - RefuseOffers
- Logical: ApplicationManagementWS_v23 - SearchApplication
- Logical: ApplicationManagementWS_v23 - SignAgreement
- Logical: ApplicationManagementWS_v23 - UpdateApplication
- Logical: ApplicationManagementWS_v23 - UpdateApprovedApplication
- Logical: ApplicationManagementWS_v23 - UpdateOfferToApplicationAndEvaluate
