---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Messages"
domain: "Analysis Model"
element_id: 1481394
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 HardCheckDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management/Card Management - Messages

## 🔗 Connections (5)

- ← Usage: [[ReplaceCardResponse]]
- ← Usage: [[ActivateCardResponse]]
- ← Generalization «XSDextension»: [[CardBlockHardCheckDto]]
- → Usage: [[HardCheckTypeDto]]
- → Usage: [[HardCheckResultDto]]

## 📊 Appears In (1 diagrams)

- Logical: Card management - Messages - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | HardCheckTypeDto |  |
| result | HardCheckResultDto |  |
