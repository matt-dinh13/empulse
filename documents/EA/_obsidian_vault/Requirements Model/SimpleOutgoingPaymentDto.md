---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1529397
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 SimpleOutgoingPaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 📝 Notes

{ADD CBL-445 /}

## 🔗 Connections (4)

- ← Dependency: [[GetOutgoingPaymentsForContractResponse]]
- ← Association: [[GenerateOutgoingPaymentOrderRequest]]
- → Dependency: [[OutgoingPaymentStatusTypeDto]]
- → Dependency: [[OutgoingPaymentTypeDto]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Logical: OutgoingPaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| amount | MoneyDto |  |
| creationDate | DateTime |  |
| paymentType | OutgoingPaymentTypeDto |  |
| status | OutgoingPaymentStatusTypeDto |  |
| isOnlineDisbursement | boolean |  |
| bankAccountNumber | string |  |
| bankCode | string |  |
| recepientName | string |  |
| salesroomCode | string |  |
| salesroomName | string |  |
| partnerCode | string |  |
| partnerName | string |  |
| disbursementDate | dateTime |  |
