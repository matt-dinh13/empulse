---
type: DataType
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Logical data model"
domain: "Analysis Model"
element_id: 1589735
diagrams: 1
connections: 1
tags:
  - datatype
  - analysis-model
---

# 📐 ActivateCardResultCode

> **Type**: DataType
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Logical data model

## 📝 Notes

This enumeration contains possible result codes of card activation.
The content is 1:1 the same as values in ActivateCardResultCodeDto.
Each change in interface has to be reflected even within this class.

## 🔗 Connections (1)

- → Dependency: [[ActivateCardResultCodeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Card operations enums - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ERROR_OPERATION_NOT_ALLOWED_FOR_CURRENT_STATE |  |  |
| ERROR_CARD_NOT_FOUND |  |  |
| ERROR_HARD_CHECK_FAILED |  |  |
| SUCCESS |  |  |
