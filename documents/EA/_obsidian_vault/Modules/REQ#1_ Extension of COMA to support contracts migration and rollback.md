---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-31177 (CLM-7630) Migrated contract support"
domain: "Modules"
element_id: 1881518
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1: Extension of COMA to support contracts migration and rollback

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-31177 (CLM-7630) Migrated contract support

## 📝 Notes

Changes in the Logical model:
- new contract status MIGRATED (BSL code = M)

Changes in the UC and Access rights:
- new AR and UC {ADD}Contract migrate via API
- new AR and UC {ADD}Contract migration rollback via API

Changes in integration:
Provided:
- expose new API Contract migrate
- expose new API Contract migration rollback
- update kafka notification to support new status and new events ContractMigrated and ContractMigrationRollback
- update API responce definition where contract status is defined as enum

## 📊 Appears In (1 diagrams)

- Custom: CBL-31177 (CLM-7630) Migrated contract support
