---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819729
diagrams: 10
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 ValidationError

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 🔗 Connections (11)

- → Dependency: [[MessageAttribute (Class 1819744)]]
- ← Dependency: [[EvaluateApplicationFault (Class 1819725)]]
- ← Dependency: [[UpdateApplicationFault (Class 1819721)]]
- ← Dependency: [[UpdateAndEvaluateApplicationFault]]
- ← Dependency: [[GetAgreementFault (Class 1819710)]]
- ← Dependency: [[AssignCardToApplicationFault (Class 1819706)]]
- ← Dependency: [[CreateAndEvaluateApplicationFault (Class 1819699)]]
- ← Dependency: [[SearchApplicationFault (Class 1819698)]]
- ← Dependency: [[CreateApplicationFault (Class 1819696)]]
- ← Dependency: [[UpdateApprovedApplicationFault (Class 1819692)]]
- ← Dependency: [[UpdateOfferToApplicationAndEvaluateFault (Class 1819691)]]

## 📊 Appears In (10 diagrams)

- Logical: ApplicationManagementWS_v22 - AssignCardToApplication
- Logical: ApplicationManagementWS_v22 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v22 - CreateApplication
- Logical: ApplicationManagementWS_v22 - EvaluateApplication
- Logical: ApplicationManagementWS_v22 - GetAgreement
- Logical: ApplicationManagementWS_v22 - SearchApplication
- Logical: ApplicationManagementWS_v22 - UpdateAndEvaluateApplication
- Logical: ApplicationManagementWS_v22 - UpdateApplication
- Logical: ApplicationManagementWS_v22 - UpdateApprovedApplication
- Logical: ApplicationManagementWS_v22 - UpdateOfferToApplicationAndEvaluate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageCode | string |  |
| messageAttributes | MessageAttribute |  |
| errorSource | string |  |
