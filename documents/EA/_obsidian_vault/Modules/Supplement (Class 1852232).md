---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Supplement definition services/Getting Supplement definition service"
domain: "Modules"
element_id: 1852232
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 Supplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Supplement definition services/Getting Supplement definition service

## 📝 Notes

A Supplement definition API resource

## 🔗 Connections (5)

- ← Usage: [[Supplements (Interface 1817069)]]
- → Usage: [[SupplementProcessSetting (Class 1852233)]]
- → Usage: [[SupplementDocumentType (Class 1852234)]]
- → Usage: [[EvaluationRequestDefinition]]
- → Usage: [[Supplement Type]]

## 📊 Appears In (1 diagrams)

- Logical: Find Supplement definition service

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
| evaluationRequestDefinition | EvaluationRequestDefinition |  |
| processType | string |  |
| {ADD}authorizeTransaction | boolean |  |
