---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1159294
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AccountClosureResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

Result of account closure

## 🔗 Connections (2)

- ← Dependency: [[ProcessAccountClosureResultRequest]]
- → Dependency: [[AccountClosureResultTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: AccountNotificationWS - Account closure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | long |  |
| resultType | AccountClosureResultTypeDto |  |
| overpayment | MoneyDto |  |
