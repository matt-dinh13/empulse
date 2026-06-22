---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Sales Network"
domain: "Analysis Model"
element_id: 1595389
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}PartnerRequest

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Sales Network

## 📝 Notes

It represents one partner (i.e. to create or to update) in the BSL. One partner has several salesrooms.

## 🔗 Connections (6)

- → Dependency: [[Payment Status (Enumeration 820029)]]
- → Dependency: [[Processing PartnerRequest]]
- → Dependency «transformation»: [[SELLERPLACE130]]
- → Dependency: [[SalesroomDto (Class 1595390)]]
- → Dependency: [[Payment Status (Enumeration 820029)]]
- → Dependency: [[PartnerTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Sales network

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentStatus | Payment Status |  |
| previousPaymentStatus | Payment Status |  |
| endOfActivity | date |  |
| activationDate | date |  |
| accountNumber | string |  |
| taxIdentificationNumber | int |  |
| partnerType | PartnerTypeDto |  |
| legalForm | string |  |
| bankAccountHolderName | string |  |
| bankCode | string |  |
| panNumber | string |  |
| salesrooms | SalesroomDto |  |
| {ADD}mainPartner | string |  |
