---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7209 (CLM-2456) FER processing queue"
domain: "Requirements Model"
element_id: 1816724
diagrams: 3
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 CLM Feature Flag

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7209 (CLM-2456) FER processing queue

## 📝 Notes

A structure for management of CLM feature flags (boolean variables for switching the new features on/off). The structure is persisted in DB.

## 🔗 Connections (1)

- ← Usage: [[{MOD}CLM feature flags]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-7209 (CLM-2456) FER processing queue
- Custom: CBL-8016 (CLM-2483) Replication of ID documents to PIF
- Logical: CLM Feature Flags

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| value | boolean |  |
| activeFlag | boolean |  |
| creationDate | date |  |
| createdBy | string |  |
| updateDate | date |  |
| updatedBy | string |  |
