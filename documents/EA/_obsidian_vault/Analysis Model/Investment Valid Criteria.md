---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Logical Data Model"
domain: "Analysis Model"
element_id: 1351132
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Investment Valid Criteria

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Logical Data Model

## 🔗 Connections (4)

- → Dependency: [[Economical Status]]
- → Aggregation: [[Enterprise Category]]
- → Dependency: [[Industry (Enumeration 1758720)]]
- → Dependency: [[Employment Type]]

## 📊 Appears In (1 diagrams)

- Logical: Extended Information - Core

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| EconomicalStatus | EconomicalStatus |  |
| MinNetIncome | value |  |
| Industry | industry |  |
| Active | boolean | true |
