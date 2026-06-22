---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3"
domain: "Analysis Model"
element_id: 1819623
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BankAccount

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3

## 🔗 Connections (2)

- ← Dependency: [[PaymentChannelDto (Class 1819629)]]
- ← Dependency: [[DirectDebitMandate]]

## 📊 Appears In (3 diagrams)

- Logical: ApplicationPaymentChannelManagementWS_v3 - Create DDM
- Logical: ApplicationPaymentChannelManagementWS_v3 - SetPaymentChannel
- Logical: ApplicationPaymentChannelManagementWS_v3 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| holderName | string |  |
| bankBranchCode | string |  |
| accountType | string |  |
| accountNumber | string |  |
