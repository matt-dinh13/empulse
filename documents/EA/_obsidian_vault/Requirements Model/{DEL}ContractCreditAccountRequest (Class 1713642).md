---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1"
domain: "Requirements Model"
element_id: 1713642
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {DEL}ContractCreditAccountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1

## 📝 Notes

{DEL CLM-5045/}
A message used as request for a credit account creation in the bank system. It is response on ContractFullInfoRequest message when credit account for REL contract is created.

## 🔗 Connections (2)

- ← Dependency «transformation»: [[CREDITACCOUNT210]]
- → Dependency: [[Generating ContractCreditAccountRequest message]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1
- Logical: Contract credit account - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| messageID | string |  |
| creditAccountNumber | string |  |
| creditAccountOpenDate | dateTime |  |
