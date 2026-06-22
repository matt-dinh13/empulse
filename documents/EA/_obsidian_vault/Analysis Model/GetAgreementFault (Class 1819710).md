---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22"
domain: "Analysis Model"
element_id: 1819710
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAgreementFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22

## 📝 Notes

Fault response sent in case, when getting of agreement documentation for respective application failed due to any reason.

## 🔗 Connections (3)

- → Dependency: [[GetAgreementResultCode (Enumeration 1819773)]]
- → Dependency: [[ValidationError (Class 1819729)]]
- ← Dependency: [[ApplicationManagementWS_v22 (Interface 1819678)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationManagementWS_v22 - GetAgreement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | GetAgreementResultCode |  |
| validationErrors | ValidationError |  |
