---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Types"
domain: "Analysis Model"
element_id: 1598954
diagrams: 3
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 PosDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Types

## 🔗 Connections (12)

- ← Dependency: [[ConfirmInstantCardRequest (Class 1598960)]]
- ← Dependency: [[CreatePersonalizedCardRequest (Class 1598963)]]
- → Dependency: [[Town (Class 1598950)]]
- → Dependency: [[Zip (Class 1598949)]]
- → Dependency: [[District (Class 1598957)]]
- → Dependency: [[SellerPlaceCode (Class 1598952)]]
- → Dependency: [[Street (Class 1598951)]]
- → Dependency: [[Subdistrict (Class 1598941)]]
- → Dependency: [[BlockNumber (Class 1598958)]]
- → Dependency: [[FlatNumber (Class 1598956)]]
- → Dependency: [[HouseNumber (Class 1598955)]]
- → Dependency: [[Region (Class 1598953)]]

## 📊 Appears In (3 diagrams)

- Logical: CardOriginationWS - types
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| blockNumber | BlockNumber |  |
| zip | Zip |  |
| town | Town |  |
| street | Street |  |
| sellerPlaceCode | SellerPlaceCode |  |
| region | Region |  |
| houseNumber | HouseNumber |  |
| district | District |  |
| flatNumber | FlatNumber |  |
| subdistrict | Subdistrict |  |
