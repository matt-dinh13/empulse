---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response"
domain: "Requirements Model"
element_id: 1878347
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}SubventionTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response

## 📝 Notes

{ADD LOR-10445/}
Object containing data related to subventions

## 🔗 Connections (1)

- ← Dependency: [[CustomerOfferRestTO (Class 1878360)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10332 Add Subvention Discount in Customer Offer REST response
- Logical: CustomerOfferRestV2 - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| chargedToClient | decimal |  |
| code | string |  |
| type | string |  |
| participantType | string |  |
| discount | boolean |  |
| purpose | string |  |
| serviceCode | string |  |
