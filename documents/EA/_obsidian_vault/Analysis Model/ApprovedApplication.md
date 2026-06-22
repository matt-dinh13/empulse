---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768218
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ApprovedApplication

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Data related to the already approved application.

## 🔗 Connections (6)

- → Dependency: [[Document (Class 1768268)]]
- → Dependency: [[PaymentChannels (Class 1768256)]]
- → Dependency: [[ExtendedProperties]]
- → Dependency: [[Relationships]]
- → Dependency: [[ExtendedInformation]]
- ← Dependency: [[UpdateApprovedApplicationRequest]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - UpdateApprovedApplication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| extendedInformation | ExtendedInformation |  |
| relationships | MessageAttribute |  |
| extendedProperties | ExtendedProperties |  |
| documents | Document |  |
| paymentChannels | PaymentChannels |  |
