---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/{ADD}Interface provided/{ADD}IsMarketingOfferAvailableForSalesroom"
domain: "Analysis Model"
element_id: 1727015
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 checkAvailabilityResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/{ADD}Interface provided/{ADD}IsMarketingOfferAvailableForSalesroom

## 🔗 Connections (2)

- → Dependency: [[ValidationCodeIsMarketingOfferAvailableForSalesroom]]
- ← Dependency: [[IsMarketingOfferAvailableForSalesroomResponse]]

## 📊 Appears In (1 diagrams)

- Logical: {ADD}IsMarketingOfferAvailableForSalesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | int |  |
| isAvailable | boolean |  |
| validationCode | ValidationCodeIsMarketingOfferAvailableForSalesroom |  |
| description | string |  |
