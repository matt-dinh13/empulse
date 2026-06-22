---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Types"
domain: "Analysis Model"
element_id: 1599086
diagrams: 3
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 PosDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Types

## 🔗 Connections (12)

- → Dependency: [[Region (Class 1599095)]]
- → Dependency: [[Town (Class 1599087)]]
- → Dependency: [[SellerPlaceCode (Class 1599093)]]
- → Dependency: [[BlockNumber (Class 1599092)]]
- → Dependency: [[Zip (Class 1599082)]]
- → Dependency: [[Subdistrict (Class 1599077)]]
- → Dependency: [[HouseNumber (Class 1599075)]]
- → Dependency: [[District (Class 1599072)]]
- → Dependency: [[Street (Class 1599070)]]
- → Dependency: [[FlatNumber (Class 1599068)]]
- ← Dependency: [[CreatePersonalizedCardRequest (Class 1599065)]]
- ← Dependency: [[ConfirmInstantCardRequest (Class 1599061)]]

## 📊 Appears In (3 diagrams)

- Logical: CardOriginationWS - types
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| zip | Zip |  |
| flatNumber | FlatNumber |  |
| district | District |  |
| town | Town |  |
| street | Street |  |
| sellerPlaceCode | SellerPlaceCode |  |
| region | Region |  |
| houseNumber | HouseNumber |  |
| blockNumber | BlockNumber |  |
| subdistrict | Subdistrict |  |
