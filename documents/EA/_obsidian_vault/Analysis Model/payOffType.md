---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Interface/PayOffs"
domain: "Analysis Model"
element_id: 810172
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 payOffType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Interface/PayOffs

## 🔗 Connections (2)

- ← Dependency: [[PayOffsType]]
- → Dependency: [[payOffReasonCodeType]]

## 📊 Appears In (1 diagrams)

- Logical: PayOffs file structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payOffDate | Date |  |
| contractCode | string |  |
| payOffReasonCode | payOffReasonCodeType |  |
