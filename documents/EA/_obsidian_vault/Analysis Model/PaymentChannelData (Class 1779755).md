---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI"
domain: "Analysis Model"
element_id: 1779755
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PaymentChannelData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI

## 🔗 Connections (1)

- → Dependency: [[BankAccountData]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelRestAPI - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | BankAccountData |  |
| contractCode | string |  |
| CUID | string |  |
| dataExchangeID | string |  |
| externalCardID | string |  |
| lastChangeRequestStatus | string |  |
| salesroomCode | string |  |
| purpose | string |  |
| sourceType | string |  |
| truncatedPAN | string |  |
| type | string |  |
| targetContract | long |  |
| validFrom | dateTime |  |
| external_verification_result | string |  |
| validTo | dateTime |  |
| isValidated | boolean |  |
