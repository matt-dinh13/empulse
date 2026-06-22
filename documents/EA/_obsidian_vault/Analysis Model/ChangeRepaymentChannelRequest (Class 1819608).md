---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3"
domain: "Analysis Model"
element_id: 1819608
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ChangeRepaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3

## 📝 Notes

Change the repayment channel for particular application.

## 🔗 Connections (2)

- → Dependency: [[RepaymentChannelType (Enumeration 1819614)]]
- ← Dependency: [[ApplicationPaymentChannelManagementWS_v3 (Interface 1819587)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationPaymentChannelManagementWS_v3 - Change Repayment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
| channel | RepaymentChannelType |  |
