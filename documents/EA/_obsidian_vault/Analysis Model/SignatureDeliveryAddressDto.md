---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3"
domain: "Analysis Model"
element_id: 1599071
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 SignatureDeliveryAddressDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3

## 🔗 Connections (10)

- → Dependency: [[Subdistrict (Class 1599077)]]
- → Dependency: [[Town (Class 1599087)]]
- → Dependency: [[Zip (Class 1599082)]]
- → Dependency: [[BlockNumber (Class 1599092)]]
- → Dependency: [[District (Class 1599072)]]
- → Dependency: [[HouseNumber (Class 1599075)]]
- → Dependency: [[Region (Class 1599095)]]
- → Dependency: [[Street (Class 1599070)]]
- → Dependency: [[FlatNumber (Class 1599068)]]
- ← Dependency: [[PreparePersonalizedCardRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CardOriginationWS.PreparePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| blockNumber | BlockNumber |  |
| district | District |  |
| flatNumber | FlatNumber |  |
| houseNumber | HouseNumber |  |
| region | Region |  |
| street | Street |  |
| town | Town |  |
| zip | Zip |  |
| subDistrict | SubDistrict |  |
