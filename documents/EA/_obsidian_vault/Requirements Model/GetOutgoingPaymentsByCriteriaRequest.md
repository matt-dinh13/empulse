---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1527592
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 GetOutgoingPaymentsByCriteriaRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 📝 Notes

{ADD CBL-3618 PAYM-1347}
request for the list of outgoing payments existing in BSL

originally used for OBS to get the list of unpaid outgoing payments based on entered search criteria

## 🔗 Connections (2)

- ← Dependency: [[OutgoingPaymentsWS (Interface 1527586)]]
- → Realisation: [[New XSD OutgoingPaymentWS.GetOutgoingPaymentListExtRequest]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Logical: OutgoingPaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| outgoingPaymentType | OutgoingPaymentTypeDto |  |
| outgoingPaymentStatus | OutgoingPaymentStatusTypeDto |  |
| readyForDisbursementFrom | DateTime |  |
| readyForDisbursementTo | DateTime |  |
| createdFrom | Datetime |  |
| createdTo | DateTime |  |
| originatingSalesroom | SalesroomCode |  |
| addressedToSalesroom | SalesroomCode |  |
| isBlocked | OutgoingPaymentIsBlocked |  |
| contractCode | Rules for Entering Outgoing Payment Search criteria - PAID |  |
