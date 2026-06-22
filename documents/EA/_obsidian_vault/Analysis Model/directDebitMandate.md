---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3"
domain: "Analysis Model"
element_id: 1819620
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DirectDebitMandate

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3

## 🔗 Connections (3)

- → Dependency: [[BankAccount (Class 1819623)]]
- ← Dependency: [[CreateDDMRequest (Class 1819606)]]
- ← Dependency: [[UpdateDDMRequest (Class 1819605)]]

## 📊 Appears In (2 diagrams)

- Logical: ApplicationPaymentChannelManagementWS_v3 - Create DDM
- Logical: ApplicationPaymentChannelManagementWS_v3 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | BankAccount |  |
| eMandate | boolean |  |
| limit | decimal |  |
