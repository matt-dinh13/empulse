---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Sales Network"
domain: "Analysis Model"
element_id: 1595390
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 SalesroomDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Sales Network

## 📝 Notes

It represents each salesroom (i.e. to create or to update) in the BSL. One partner has several salesrooms.

## 🔗 Connections (4)

- → Dependency: [[Payment Status (Enumeration 820029)]]
- → Dependency: [[SalesroomStatusDto (Enumeration 820030)]]
- → Dependency: [[Payment Status (Enumeration 820029)]]
- ← Dependency: [[{MOD}PartnerRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Sales network

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| paymentStatus | Payment Status |  |
| previousPaymentStatus | Payment Status |  |
| endOfActivity | date |  |
| activationDate | date |  |
| accountNumber | string |  |
| bankAccountHolderName | string |  |
| bankCode | string |  |
| status | SalesroomStatusDto |  |
