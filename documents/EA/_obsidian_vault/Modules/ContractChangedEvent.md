---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/ContractPaidOff"
domain: "Modules"
element_id: 1880084
diagrams: 10
connections: 10
tags:
  - class
  - modules
---

# 🔷 ContractChangedEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/Kafka/Events/v1/ContractPaidOff

## 📝 Notes

{ADD CLM-4408/}
Kafka notification about significant changes on contract.

https://coma.id00a1.cz.infra/async-api/avro-schema?javaType=net.homecredit.coma.api.async.avro.contract.event.v1.ContractChangedEvent

https://coma.id00a1.cz.infra/async-api/ui/index.html?schemaUrl=%2Fasync-api%2Fschema&definition=clm%3Adefault

## 🔗 Connections (10)

- ← Dependency: [[{ADD}ContractArchived]]
- ← Dependency: [[{ADD}ContractFinished (Class 1802406)]]
- ← Dependency: [[{ADD}ContractPaidOff (Class 1802409)]]
- ← Dependency: [[{ADD}ContractWrittenOff (Class 1802412)]]
- ← Dependency: [[{ADD}ContractActivated (Class 1802421)]]
- ← Dependency: [[{ADD}ContractSigned (Class 1802422)]]
- → Dependency: [[ContractEvent (Class 1880088)]]
- ← Dependency: [[ContractCancelled (Class 1880095)]]
- ← Dependency: [[{ADD}ContractMigrated]]
- ← Dependency: [[{ADD}ContractMigrationRollback]]

## 📊 Appears In (10 diagrams)

- Custom: ContractPaidOff
- Logical: {ADD}ContractActivated
- Logical: {ADD}ContractSigned
- Logical: {ADD}ContractWrittenOff
- Logical: ContractArchived
- Logical: ContractCancelled
- Logical: ContractChangedEvent
- Logical: ContractFinished
- Logical: ContractMigrated
- Logical: ContractMigrationRollback

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
