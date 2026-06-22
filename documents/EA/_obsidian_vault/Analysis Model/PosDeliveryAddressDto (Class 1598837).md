---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types"
domain: "Analysis Model"
element_id: 1598837
diagrams: 3
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 PosDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types

## 🔗 Connections (11)

- → Dependency: [[Region (Class 1598836)]]
- → Dependency: [[Subdistrict (Class 1598823)]]
- → Dependency: [[SellerPlaceCode (Class 1598835)]]
- → Dependency: [[HouseNumber (Class 1598839)]]
- → Dependency: [[Zip (Class 1598831)]]
- → Dependency: [[BlockNumber (Class 1598847)]]
- → Dependency: [[Town (Class 1598833)]]
- → Dependency: [[District (Class 1598841)]]
- ← Dependency: [[CardDetailDto (Class 1598845)]]
- → Dependency: [[FlatNumber (Class 1598840)]]
- → Dependency: [[Street (Class 1598834)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.FindCard
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sellerPlaceCode | SellerPlaceCode |  |
| district | District |  |
| blockNumber | BlockNumber |  |
| region | Region |  |
| flatNumber | FlatNumber |  |
| zip | Zip |  |
| town | Town |  |
| street | Street |  |
| houseNumber | HouseNumber |  |
| subdistrict | Subdistrict |  |
