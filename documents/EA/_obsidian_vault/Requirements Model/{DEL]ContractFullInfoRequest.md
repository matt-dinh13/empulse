---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1"
domain: "Requirements Model"
element_id: 1713641
diagrams: 3
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 {DEL]ContractFullInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1

## 📝 Notes

{DEL CLM-5045/}
A message for notification about any change on Contract.

## 🔗 Connections (5)

- → Dependency «transformation»: [[CREDIT110]]
- → Dependency: [[{DEL}ContractFullInfo]]
- → Dependency: [[{MOD}Processing ContractFullInfoRequest message]]
- → Dependency: [[ContractSystemEventType]]
- → Dependency: [[External Reference (Boundary 1767497)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-18402 (CLM-5045) JMS IN/OUT - Cleanup  - wave 1
- Logical: {DEL}Contract full info notification - JMS messages
- Logical: Contract notifications - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| systemEvent | ContractSystemEventType |  |
| data | ContractFullInfo |  |
