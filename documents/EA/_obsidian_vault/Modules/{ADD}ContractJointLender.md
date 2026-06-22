---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1858914
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractJointLender

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 📝 Notes

{ADD CLM-5188/}

Entity representing a bank partner to HCI having a share in profits from the given contract.

## 🔗 Connections (1)

- ← Dependency: [[Contract (Class 1858916)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| share | int |  |
| validFrom | date |  |
| validTo | date |  |
| agreement | string |  |
