---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/ContractPaidOff"
domain: "Modules"
element_id: 1858917
diagrams: 8
connections: 8
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractChangedEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/ContractPaidOff

## 📝 Notes

{ADD CLM-4408/}
Kafka notification about significant changes on contract.

https://coma.id00a1.cz.infra/async-api/avro-schema?javaType=net.homecredit.coma.api.async.avro.contract.event.v1.ContractChangedEvent

https://coma.id00a1.cz.infra/async-api/ui/index.html?schemaUrl=%2Fasync-api%2Fschema&definition=clm%3Adefault

## 🔗 Connections (8)

- ← Dependency: [[{ADD}ContractArchived (Class 1838572)]]
- ← Dependency: [[{ADD}ContractFinished (Class 1838576)]]
- ← Dependency: [[{ADD}ContractPaidOff (Class 1838579)]]
- ← Dependency: [[{ADD}ContractWrittenOff (Class 1838582)]]
- ← Dependency: [[{ADD}ContractActivated (Class 1838591)]]
- ← Dependency: [[{ADD}ContractCancelled]]
- ← Dependency: [[{ADD}ContractSigned (Class 1838592)]]
- → Dependency: [[ContractEvent (Class 1858915)]]

## 📊 Appears In (8 diagrams)

- Custom: ContractPaidOff
- Logical: {ADD}ContractActivated
- Logical: {ADD}ContractCancelled
- Logical: {ADD}ContractSigned
- Logical: {ADD}ContractWrittenOff
- Logical: ContractArchived
- Logical: ContractChangedEvent
- Logical: ContractFinished

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| B3 | string |  |
| ce_type | string |  |
| ce_source | string |  |
| ce_time | string |  |
| ce_partioningkey | string |  |
| ce_specversion | string |  |
| ce_id | string |  |
| content-type | string | application/avro |
| ce_subject | string |  |
| Data | ContractEvent |  |
