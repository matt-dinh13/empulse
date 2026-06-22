---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan"
domain: "Requirements Model"
element_id: 1881063
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ServiceOfferParametersDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan

## 📝 Notes

Data for additional service offer search

## 🔗 Connections (3)

- → Dependency: [[ClientDto (Class 1881106)]]
- ← Dependency: [[service-offers]]
- → Dependency: [[CommodityDataDto]]

## 📊 Appears In (4 diagrams)

- Custom: PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Custom: PCG-5343 Display vas add on offers based on specific product type (CBL-29025)
- Logical: Service
- Logical: Service offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroom | string |  |
| serviceType | string |  |
| serviceCode | string |  |
| client | ClientDto |  |
| commodityData | CommodityDataDto |  |
| clientSumInsured | int |  |
| contractSumInsured | int |  |
| {ADD} productCode | string |  |
