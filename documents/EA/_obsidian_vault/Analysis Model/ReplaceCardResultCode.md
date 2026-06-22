---
type: DataType
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Logical data model"
domain: "Analysis Model"
element_id: 1589736
diagrams: 1
connections: 1
tags:
  - datatype
  - analysis-model
---

# 📐 ReplaceCardResultCode

> **Type**: DataType
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Logical data model

## 📝 Notes

This enumeration contains possible result codes of card replacement.
The content is 1:1 the same as values in ReplaceCardResultCodeDto.
Each change in interface has to be reflected even within this class.

## 🔗 Connections (1)

- → Dependency: [[ReplaceCardResultCodeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Card operations enums - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SUCCESS |  |  |
| ERROR_CARD_NOT_FOUND |  |  |
| ERROR_INVALID_CARD_TYPE |  |  |
| ERROR_HARD_CHECK_FAILED |  |  |
| ERROR_OPERATION_NOT_ALLOWED_FOR_CURRENT_STATE |  |  |
| {ADD}ERROR_PIN_TRANSFER_NOT_ALLOWED_FOR_CURRENT_BLOCK |  |  |
| {ADD}OTHER_ERROR |  |  |
