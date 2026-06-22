---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types"
domain: "Analysis Model"
element_id: 1598881
diagrams: 3
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 PosDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types

## 🔗 Connections (11)

- → Dependency: [[Town (Class 1598906)]]
- → Dependency: [[BlockNumber (Class 1598899)]]
- ← Dependency: [[CardDetailDto (Class 1598891)]]
- → Dependency: [[Subdistrict (Class 1598886)]]
- → Dependency: [[FlatNumber (Class 1598903)]]
- → Dependency: [[SellerPlaceCode (Class 1598882)]]
- → Dependency: [[District (Class 1598894)]]
- → Dependency: [[Region (Class 1598880)]]
- → Dependency: [[Street (Class 1598879)]]
- → Dependency: [[Zip (Class 1598878)]]
- → Dependency: [[HouseNumber (Class 1598876)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.FindCard
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sellerPlaceCode | SellerPlaceCode |  |
| flatNumber | FlatNumber |  |
| district | District |  |
| region | Region |  |
| street | Street |  |
| town | Town |  |
| zip | Zip |  |
| houseNumber | HouseNumber |  |
| blockNumber | BlockNumber |  |
| subdistrict | Subdistrict |  |
