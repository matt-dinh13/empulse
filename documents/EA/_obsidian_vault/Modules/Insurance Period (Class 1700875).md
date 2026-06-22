---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM"
domain: "Modules"
element_id: 1700875
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Insurance Period

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM

## 📝 Notes

This entity represents single insurance period of an insurance contract. For not renewable insurance programs there will be a single insurance period for each insurance contract.

## 🔗 Connections (2)

- → Dependency: [[Insurance Period Status]]
- → Aggregation: [[Insurance Contract (Class 1700872)]]

## 📊 Appears In (1 diagrams)

- Logical: Changes in LDM

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
