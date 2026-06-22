---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768263
diagrams: 9
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 ValidationError

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 🔗 Connections (10)

- → Dependency: [[MessageAttribute (Class 1768255)]]
- ← Dependency: [[SearchApplicationFault]]
- ← Dependency: [[UpdateApplicationFault]]
- ← Dependency: [[EvaluateApplicationFault]]
- ← Dependency: [[GetAgreementFault]]
- ← Dependency: [[AssignCardToApplicationFault]]
- ← Dependency: [[UpdateApprovedApplicationFault]]
- ← Dependency: [[CreateAndEvaluateApplicationFault]]
- ← Dependency: [[CreateApplicationFault]]
- ← Dependency: [[UpdateOfferToApplicationAndEvaluateFault]]

## 📊 Appears In (9 diagrams)

- Logical: ApplicationManagementWS_v23 - AssignCardToApplication
- Logical: ApplicationManagementWS_v23 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v23 - CreateApplication
- Logical: ApplicationManagementWS_v23 - EvaluateApplication
- Logical: ApplicationManagementWS_v23 - GetAgreement
- Logical: ApplicationManagementWS_v23 - SearchApplication
- Logical: ApplicationManagementWS_v23 - UpdateApplication
- Logical: ApplicationManagementWS_v23 - UpdateApprovedApplication
- Logical: ApplicationManagementWS_v23 - UpdateOfferToApplicationAndEvaluate

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageCode | string |  |
| messageAttributes | MessageAttribute |  |
| errorSource | string |  |
