---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819476
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeRequestDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Credit limit change request for an account. When the request is received by Account Management it means it is fully approved.
                Account Management validates and executes the request there is not an approval process involved.

## 🔗 Connections (4)

- ← Dependency: [[CreditLimitChangeRequest]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[CreditLimitChangeEventTypeDto]]
- → Dependency: [[CreditLimitOperationTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS - Credit limit change request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestId | TransactionSourceIdDto |  |
| requestDate | date |  |
| originalCreditLimit | PositiveMoneyDto |  |
| requestedCreditLimit | PositiveMoneyDto |  |
| creditLimitOperationType | CreditLimitOperationTypeDto |  |
| creditLimitChangeEvent | CreditLimitChangeEventTypeDto |  |
| accountNumber | AccountNumberType |  |
| campaignDetails | string |  |
| effectiveInterestRate | decimal |  |
