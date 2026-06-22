---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768170
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAgreementFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Fault response sent in case, when getting of agreement documentation for respective application failed due to any reason.

## 🔗 Connections (3)

- → Dependency: [[GetAgreementResultCode]]
- → Dependency: [[ValidationError (Class 1768263)]]
- ← Dependency: [[ApplicationManagementWS_v23]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v23 - GetAgreement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | GetAgreementResultCode |  |
| validationErrors | ValidationError |  |
