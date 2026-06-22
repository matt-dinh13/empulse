---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3"
domain: "Analysis Model"
element_id: 1819607
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetDDMByApplicationResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3

## 📝 Notes

List of Direct Debit Mandates (DDM) returned.

## 🔗 Connections (2)

- → Dependency: [[DDMInfoBaseDto (Class 1819628)]]
- ← Dependency: [[ApplicationPaymentChannelManagementWS_v3 (Interface 1819587)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationPaymentChannelManagementWS_v3 - Get DDM by Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddm | DDMInfoBaseDto |  |
