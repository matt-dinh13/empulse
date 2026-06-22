---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3"
domain: "Analysis Model"
element_id: 1774735
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UpdatePaymentChannelOrDraftRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelRestAPI/PaymentChannelRestAPI v3

## 🔗 Connections (4)

- → Dependency: [[bankAccountData]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774806)]]
- ← Dependency: [[PaymentChannelRestAPI V3 (Interface 1774737)]]
- ← Dependency: [[PaymentChannelRestAPI V3]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChanenlRestAPI - Update Payment Channel or Draft

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | bankAccountData |  |
| contractCode | long |  |
| externalCardID | string |  |
| purpose | Payment Purpose Type |  |
| salesroomCode | string |  |
| sourceType | string |  |
| targetContract | long |  |
| type | Payment Channel Type |  |
| externalVefificationResult | string |  |
