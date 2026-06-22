---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11502 (CLM-4318) Replace screen MMO with tab CO in CC"
domain: "Requirements Model"
element_id: 1761134
diagrams: 2
connections: 0
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}Products

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11502 (CLM-4318) Replace screen MMO with tab CO in CC

## 📝 Notes

{ADD CLM-4318/}
Grid is displayed when system property CustomerOffersShowProducts = True.

System gets list of offer's products and their codes by calling REST API PartyOffer.

For each product system gets product name from data source Contract -> Product [where .code = product code].Name

## 📊 Appears In (2 diagrams)

- Custom: CBL-11502 (CLM-4318) Replace screen MMO with tab CO in CC
- Custom: Customer offers tab v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
