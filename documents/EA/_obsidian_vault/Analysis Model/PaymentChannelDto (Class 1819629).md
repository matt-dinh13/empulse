---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3"
domain: "Analysis Model"
element_id: 1819629
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PaymentChannelDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3

## 🔗 Connections (4)

- → Dependency: [[CardDataType (Class 1819627)]]
- → Dependency: [[BankAccount (Class 1819623)]]
- → Dependency: [[DDMType]]
- ← Dependency: [[SetPaymentChannelRequest]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationPaymentChannelManagementWS_v3 - SetPaymentChannel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | string |  |
| purpose | string |  |
| type | string |  |
| sourceType | string |  |
| salesroomCode | string |  |
| currency | string |  |
| bankAccountType | BankAccount |  |
| cardData | CardDataType |  |
| ddmData | DDMType |  |
