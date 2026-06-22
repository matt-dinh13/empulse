---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CRDPST Data"
domain: "Modules"
element_id: 1152099
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 Standard Payment Card Service

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CRDPST Data

## 📝 Notes

Specific parameters for service Standard Payment cards.

## 🔗 Connections (3)

- → Dependency: [[External Card Type]]
- → Dependency: [[External Card Type]]
- ← Dependency «mapping»: [[ServiceCRDPSTDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service CRDPST Data
- Logical: Standard Payment Card

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Postponed Activation Months | int |  |
| Postponed Activation Offset | int |  |
| Instant Card Allowed | boolean | false |
| Personalized Card Allowed | boolean | false |
| Instant Card Type | External Card Type |  |
| Personalized Card Type | External Card Type |  |
| POS Delivery Allowed | boolean | false |
| Customer Address Delivery Allowed | boolean | false |
