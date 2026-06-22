---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/SeizureWS/Messages"
domain: "Analysis Model"
element_id: 978444
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 UnFreezeAccountRequestDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/SeizureWS/Messages

## 📝 Notes

Unfreeze accounts frozen due to seizure request.

## 📊 Appears In (1 diagrams)

- Logical: Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | acc:AccountNumberType |  |
| freezeIds | hs:TransactionSourceIdDto |  |
| freezeType | frzc:FreezeTypeDto |  |
