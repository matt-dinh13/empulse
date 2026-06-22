---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model"
domain: "Modules"
element_id: 815945
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 PartnerRequest

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model

## 📝 Notes

It represents one partner (i.e. to create or to update) in the BSL. One partner has several salesrooms.

## 🔗 Connections (7)

- → Dependency «transformation»: [[SELLERPLACE130]]
- → Dependency: [[partnerTypeDto]]
- → Dependency: [[Processing PartnerRequest]]
- → Dependency: [[SalesroomDto]]
- → Dependency: [[Payment Status]]
- → Dependency: [[SalesroomStatusDto]]
- → Dependency: [[Payment Status]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Network - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentStatus | Payment Status |  |
| previousPaymentStatus | Payment Status |  |
| endOfActivity | date |  |
| activationDate | date |  |
| accountNumber | string |  |
| taxIdentificationNumber | int |  |
| partnerType | partnerTypeDto |  |
| legalForm | string |  |
| bankAccountHolderName | string |  |
| bankCode | string |  |
| panNumber | string |  |
| salesrooms | SalesroomDto |  |
| status | SalesroomStatusDto |  |
