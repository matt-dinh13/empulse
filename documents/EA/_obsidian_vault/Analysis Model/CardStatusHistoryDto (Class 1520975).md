---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/History/HistoryWS V2"
domain: "Analysis Model"
element_id: 1520975
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CardStatusHistoryDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/History/HistoryWS V2

## 🔗 Connections (3)

- ← Association: [[GetCardStatusHistoryResponse (Class 1521137)]]
- → Dependency «use»: [[CardStatusDto]]
- → Dependency: [[Card Blockage Reason]]

## 📊 Appears In (1 diagrams)

- Logical: History management - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | CardStatusDto |  |
| modifiedBy | string |  |
| changeDate | dateTime |  |
| reason | string |  |
