---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/SeizureWS/Types"
domain: "Analysis Model"
element_id: 978450
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 FreezeAccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/SeizureWS/Types

## 🔗 Connections (1)

- → Association: [[FreezeTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| freezeId | hs:TransactionSourceIdDto |  |
| accountNumber | acc:AccountNumberType |  |
| freezeAmount | hs:MoneyDto |  |
| note | hs:NoteType |  |
