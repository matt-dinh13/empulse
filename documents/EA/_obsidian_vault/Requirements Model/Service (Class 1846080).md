---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5647 BRPH-2755 - Optimizing Subvention Management"
domain: "Requirements Model"
element_id: 1846080
diagrams: 3
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 Service

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5647 BRPH-2755 - Optimizing Subvention Management

## 📝 Notes

Service settings in service catalog

## 🔗 Connections (5)

- ← Aggregation: [[Service Parameter (Class 1846081)]]
- ← Aggregation: [[Service Relation]]
- ← Aggregation: [[Service Selection Criterion]]
- → Dependency: [[Service Type (Class 1846099)]]
- ← Aggregation: [[Service Role]]

## 📊 Appears In (3 diagrams)

- Logical: PCG-5647 BRPH-2755 - Optimizing Subvention Management
- Logical: Service Structure
- Logical: Service Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Service Type | Service Type |  |
| Description | string |  |
| Tariff | {MOD}Tariff |  |
| Service Level | string |  |
| Final | boolean |  |
| Valid from | date |  |
| Valid to | date |  |
| Manual Termination Allowed | boolean | false |
| Manual Cancellation Allowed | boolen | false |
