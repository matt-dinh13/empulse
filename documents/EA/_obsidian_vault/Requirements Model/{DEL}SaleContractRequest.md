---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1"
domain: "Requirements Model"
element_id: 1713631
diagrams: 2
connections: 0
tags:
  - class
  - requirements-model
---

# 🔷 {DEL}SaleContractRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1

## 📝 Notes

{DEL CLM-5045/}
Message informing about request of contract sale.

## 📊 Appears In (2 diagrams)

- Custom: CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1
- Logical: Generated JMS messages - Contract Sale

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| newOwner | string |  |
| totalDebt | MoneyDto |  |
| salePrice | MoneyDto |  |
| dateSale | date |  |
