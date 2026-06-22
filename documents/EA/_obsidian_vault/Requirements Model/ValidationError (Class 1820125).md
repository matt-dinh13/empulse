---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1820125
diagrams: 13
connections: 12
tags:
  - class
  - requirements-model
---

# 🔷 ValidationError

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 🔗 Connections (12)

- → Dependency: [[MessageAttribute (Class 1820129)]]
- ← Dependency: [[UpdateOfferToApplicationAndEvaluateFault (Class 1820042)]]
- ← Dependency: [[UpdateApplicationFault (Class 1820039)]]
- ← Dependency: [[SignApplicationFault]]
- ← Dependency: [[AssignCardToApplicationFault (Class 1820025)]]
- ← Dependency: [[PrepareDocumentationFault]]
- ← Dependency: [[EvaluateApplicationFault (Class 1820021)]]
- ← Dependency: [[SearchApplicationFault (Class 1820019)]]
- ← Dependency: [[UpdateAndEvaluateApplicationFault (Class 1820013)]]
- ← Dependency: [[CreateAndEvaluateApplicationFault (Class 1820011)]]
- ← Dependency: [[CreateApplicationFault (Class 1820009)]]
- ← Dependency: [[UpdateApprovedApplicationFault (Class 1820007)]]

## 📊 Appears In (13 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Logical: ApplicationManagementWS_v21 - AssignCardToApplication
- Logical: ApplicationManagementWS_v21 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - CreateApplication
- Logical: ApplicationManagementWS_v21 - EvaluateApplication
- Logical: ApplicationManagementWS_v21 - InitiateEvaluation
- Logical: ApplicationManagementWS_v21 - PrepareDocumentation
- Logical: ApplicationManagementWS_v21 - SearchApplication
- Logical: ApplicationManagementWS_v21 - SignApplication
- Logical: ApplicationManagementWS_v21 - UpdateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - UpdateApplication
- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication
- Logical: ApplicationManagementWS_v21 - UpdateOfferToApplicationAndEvaluate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageCode | string |  |
| messageAttributes | MessageAttribute |  |
| errorSource | string |  |
