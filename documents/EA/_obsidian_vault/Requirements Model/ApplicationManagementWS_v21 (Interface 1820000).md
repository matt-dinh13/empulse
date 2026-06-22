---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1820000
diagrams: 16
connections: 53
tags:
  - interface
  - requirements-model
---

# 🔶 ApplicationManagementWS_v21

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

When creating new version of WS, check with LOR3 removal of the PrepareDocumentation and SignApplication from the WS.

## 🔗 Connections (53)

- → Dependency: [[PrepareDocumentationFault]]
- → Dependency: [[GetApplicationDataRequest (Class 1820018)]]
- → Realisation: [[01.313 Evaluate application (UseCase 1879292)]]
- → Dependency: [[UpdateAndEvaluateApplicationFault (Class 1820013)]]
- → Dependency: [[UpdateAndEvaluateApplicationRequest (Class 1820014)]]
- → Dependency: [[SearchApplicationFault (Class 1820019)]]
- → Dependency: [[UpdateApplicationFault (Class 1820039)]]
- → Dependency: [[PrepareDocumentationResponse]]
- → Dependency: [[SearchApplicationRequest (Class 1820026)]]
- → Realisation: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]
- → Dependency: [[CreateAndEvaluateApplicationFault (Class 1820011)]]
- → Dependency: [[CancelApplicationFault (Class 1820035)]]
- → Dependency: [[GetApplicationDataResponse (Class 1820017)]]
- → Dependency: [[EvaluateApplicationRequest]]
- → Dependency: [[CreateApplicationResponse (Class 1820033)]]
- → Dependency: [[01.385 Assign card to application externally (UseCase 1879300)]]
- → Dependency: [[UpdateApprovedApplicationFault (Class 1820007)]]
- → Dependency: [[UpdateOfferToApplicationAndEvaluateResponse (Class 1820023)]]
- → Dependency: [[CreateAndEvaluateApplicationResponse (Class 1820038)]]
- → Dependency: [[SignApplicationRequest]]
- → Dependency: [[01.164 Search for application (UseCase 1879288)]]
- → Realisation: [[{MOD}01.310 Update application v9]]
- → Realisation: [[01.096 Prepare documentation externally (UseCase 1879294)]]
- → Dependency: [[SignApplicationFault]]
- → Realisation: [[01.095 Create and evaluate application]]
- → Dependency: [[CreateApplicationFault (Class 1820009)]]
- → Dependency: [[UpdateOfferToApplicationAndEvaluateRequest (Class 1820022)]]
- → Dependency: [[AssignCardToApplicationRequest (Class 1820008)]]
- → Dependency: [[EvaluateApplicationResponse (Class 1820029)]]
- → Realisation: [[{MOD}01.099 Sign contract externally]]
- → Dependency: [[CreateAndEvaluateApplicationRequest (Class 1820020)]]
- → Dependency: [[UpdateApplicationResponse (Class 1820006)]]
- → Realisation: [[{MOD}01.098 Update and evaluate application v9]]
- → Dependency: [[AssignCardToApplicationFault (Class 1820025)]]
- → Dependency: [[UpdateApprovedApplicationResponse (Class 1820041)]]
- → Dependency: [[UpdateApplicationRequest (Class 1820032)]]
- → Dependency: [[SearchApplicationResponse (Class 1820037)]]
- → Realisation: [[01.097 Cancel application externally]]
- → Dependency: [[UpdateApprovedApplicationRequest (Class 1820012)]]
- → Dependency: [[CreateApplicationRequest (Class 1820030)]]
- → Dependency: [[AssignCardToApplicationResponse (Class 1820034)]]
- → Dependency: [[CancelApplicationResponse (Class 1820040)]]
- → Dependency: [[UpdateAndEvaluateApplicationResponse (Class 1820015)]]
- → Dependency: [[CancelApplicationRequest (Class 1820010)]]
- → Dependency: [[GetApplicationDataFault (Class 1820005)]]
- → Realisation: [[01.040 Get application data (UseCase 1879289)]]
- → Dependency: [[SignApplicationResponse]]
- → Realisation: [[01.312 Update approved application (UseCase 1879295)]]
- → Dependency: [[EvaluateApplicationFault (Class 1820021)]]
- → Dependency: [[UpdateOfferToApplicationAndEvaluateFault (Class 1820042)]]
- → Dependency: [[PrepareDocumentationRequest]]
- → Realisation: [[{MOD}01.314 Create application externally]]
- → Dependency: [[External Reference (Boundary 1820131)]]

## 📊 Appears In (16 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Logical: ApplicationManagementWS_v21
- Logical: ApplicationManagementWS_v21 - AssignCardToApplication
- Logical: ApplicationManagementWS_v21 - CancelApplication
- Logical: ApplicationManagementWS_v21 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - CreateApplication
- Logical: ApplicationManagementWS_v21 - EvaluateApplication
- Logical: ApplicationManagementWS_v21 - GetApplicationData
- Logical: ApplicationManagementWS_v21 - InitiateEvaluation
- Logical: ApplicationManagementWS_v21 - PrepareDocumentation
- Logical: ApplicationManagementWS_v21 - SearchApplication
- Logical: ApplicationManagementWS_v21 - SignApplication
- Logical: ApplicationManagementWS_v21 - UpdateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - UpdateApplication
- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication
- Logical: ApplicationManagementWS_v21 - UpdateOfferToApplicationAndEvaluate
