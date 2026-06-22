---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Logical data model"
domain: "Modules"
element_id: 1806708
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Queue

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Registration tickets orchestration analyses/Logical data model

## 🔗 Connections (3)

- → Dependency: [[NontificationCondition]]
- → Dependency: [[Identification (Class 1806715)]]
- ← Dependency: [[QueuesConfiguration]]

## 📊 Appears In (1 diagrams)

- Logical: Queues configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| identification | Identification |  |
| registrationReadyCondition | NontificationCondition |  |
| queueCode | string |  |
