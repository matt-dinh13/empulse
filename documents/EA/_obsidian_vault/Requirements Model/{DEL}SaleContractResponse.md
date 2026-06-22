---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1"
domain: "Requirements Model"
element_id: 1713639
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {DEL}SaleContractResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1

## 📝 Notes

{DEL CLM-5045/}
It serves as a notification about processing of request of contract sale.

## 🔗 Connections (2)

- ← Dependency «transformation»: [[RESULT190]]
- → Dependency: [[SaleContractResultType (Enumeration 1750196)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1
- Logical: Contract sale - Communication model
- Logical: Contract sale - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| resultCode | SaleContractResultType |  |
