---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8991 (CLM-2970) Setting card replacement screen options"
domain: "Requirements Model"
element_id: 1519500
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 CardStatusHistoryDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8991 (CLM-2970) Setting card replacement screen options

## 🔗 Connections (3)

- ← Association: [[GetCardStatusHistoryResponse]]
- → Dependency «use»: [[CardStatusDto]]
- → Dependency: [[Card Blockage Reason]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options
- Logical: History management - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | CardStatusDto |  |
| modifiedBy | string |  |
| changeDate | dateTime |  |
| reason | string |  |
