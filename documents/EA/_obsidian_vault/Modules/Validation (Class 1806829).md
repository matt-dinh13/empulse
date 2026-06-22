---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Kafka/v1/Common/ContractRegistrationEvent"
domain: "Modules"
element_id: 1806829
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Validation

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Kafka/v1/Common/ContractRegistrationEvent

## 📝 Notes

{ADD CLM-5165/}

Contract Registration Validation

This attribute is filled with invalid commodities coming from PRC at the end of the registration process.

## 🔗 Connections (2)

- ← Dependency: [[Body]]
- → Dependency: [[ValidationCommodity]]

## 📊 Appears In (1 diagrams)

- Logical: ContractRegistrationEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| skippedCommodities | ValidationCommodity[] |  |
