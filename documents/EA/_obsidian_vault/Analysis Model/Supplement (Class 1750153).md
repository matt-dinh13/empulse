---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Interface Provided/Web Services"
domain: "Analysis Model"
element_id: 1750153
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Supplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Interface Provided/Web Services

## 📝 Notes

A Supplement definition structure

## 🔗 Connections (6)

- → Usage: [[SupplementProcessSetting]]
- → Usage: [[Supplement Type (Enumeration 1879280)]]
- ← Usage: [[Supplements (Interface 1750154)]]
- → Usage: [[SupplementDocumentType]]
- ← Generalization: [[TransactionSupplement (Class 1750152)]]
- → Usage: [[{ADD}EvaluationRequestDefinition_v2]]

## 📊 Appears In (1 diagrams)

- Logical: Supplement definition - Get Supplement setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| supplementId | string |  |
| type | string |  |
| code | string |  |
| versionStatus | string |  |
| versionNumber | int |  |
| processSetting | SupplementProcessSetting |  |
| documentSetting | SupplementDocumentType |  |
| {ADD}evaluationRequestDefinition | {ADD}EvaluationRequestDefinition_v2 |  |
