---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model"
domain: "Modules"
element_id: 815946
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 SalesroomDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Sales Network/Communication Model

## 📝 Notes

It represents each salesroom (i.e. to create or to update) in the BSL. One partner has several salesrooms.

## 🔗 Connections (4)

- → Dependency: [[Payment Status]]
- → Dependency: [[SalesroomStatusDto]]
- → Dependency: [[Payment Status]]
- ← Dependency: [[PartnerRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Sales Network - Communication model

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
