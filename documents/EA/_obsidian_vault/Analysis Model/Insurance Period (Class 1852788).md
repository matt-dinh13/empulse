---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model"
domain: "Analysis Model"
element_id: 1852788
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Insurance Period

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Logical Data Model

## 📝 Notes

This entity represents single insurance period of an insurance contract. For not renewable insurance programs there will be a single insurance period for each insurance contract.

## 🔗 Connections (3)

- → Dependency: [[Outgoing Payment]]
- → Dependency: [[Insurance Period Status (Class 1852790)]]
- → Aggregation: [[Insurance Contract (Class 1852795)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | Insurance Period Status |  |
| Start Date | Date |  |
| End Date | Date |  |
| Sum Insured | Financial Amount |  |
| Premium | Financial Amount |  |
| Net Premium | Financial Amount |  |
| Register Inclusion Date | Date |  |
| End Date Original | Date |  |
| Insurance Company Payment Code | Text |  |
| Revenue Payment Code | Text |  |
| Premium Terminated | Financial Amount |  |
| Net Premium Terminated | Financial Amount |  |
