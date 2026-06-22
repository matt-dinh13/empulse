---
type: DataType
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG"
domain: "Requirements Model"
element_id: 1589738
diagrams: 2
connections: 3
tags:
  - datatype
  - requirements-model
---

# 📐 CardOperationFailedReasonType

> **Type**: DataType
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG

## 📝 Notes

This enumeration contains possible fail reasons of card operation (PIN generation, activation etc.).
The content is 1:1 the same as values in CardOperationFailedReasonTypeDto.
Each change in interface has to be reflected even within this class.

Currently it is used only for translation purposes.

## 🔗 Connections (2)

- → Dependency: [[CardOperationFailedReasonTypeDto]]
- → Dependency: [[ActivateCardResultCodeDto]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG
- Logical: Card operations enums - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ERROR_INVALID_CARD_TYPE |  |  |
| ERROR_CARD_NOT_FOUND |  |  |
| ERROR_OPERATION_NOT_ALLOWED_FOR_CURRENT_STATE |  |  |
| CARD_STATUS |  |  |
| CARD_BLOCKED |  |  |
| CUSTOMER_AGE |  |  |
| EMPK_GENERATION_FAILED |  |  |
| UNSUCCESSFUL_CHANGE_THROUGH_IVR |  |  |
| DPD_LIMIT |  |  |
| DPD_LIMIT_SYSTEM_ERROR |  |  |
| UNSUCCESSFUL_CHANGE_THROUGH_MAP |  |  |
| ACCOUNT_STATUS |  |  |
| {ADD}UNSUCCESSFUL_CHANGE_THROUGH_ATM |  |  |
