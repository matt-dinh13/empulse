---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14504 (CLM-5127) Asynchronous contract activation"
domain: "Requirements Model"
element_id: 1724842
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ContractRegisteredSE

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14504 (CLM-5127) Asynchronous contract activation

## 📝 Notes

{ADD CLM-4704/}

## 🔗 Connections (3)

- → Dependency «flow»: [[{MOD}Process ContractRegisteredSE [PAY]]]
- → Dependency «flow»: [[Process ContractRegisteredSE [CLM]]]
- → Dependency: [[External Reference (Boundary 1881015)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
- Custom: CBL-16401 (CLM-4704) - Process Kafka contract register
- Logical: ContractSystemEvent schema
- Use Case: Processing of ContractSystemEvents

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}processWithoutReceiveDDM | boolean |  |
