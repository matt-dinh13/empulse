---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Data prepared notification/Logical data model"
domain: "Analysis Model"
element_id: 1443625
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 File Import Dataset Type Processing Parameter

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Data prepared notification/Logical data model

## 📝 Notes

Definition of parameters for file import dataset processing.

Note for implementation
Used only for Dataset Type Processing Parameter

## 🔗 Connections (1)

- ← Dependency: [[Dataset Type Processing Parameter]]

## 📊 Appears In (1 diagrams)

- Logical: Data prepared notification - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| InputFileDirectory | string |  |
| InvalidFileDirectory | string |  |
| ResultFileDirectory | string |  |
| ProcessedFileDirectory | string |  |
| MaxInputFileSize | int |  |
| AllowedInputFileExtension | string |  |
| InputFileXSD | schema |  |
| ResultFileNamePattern | string |  |
