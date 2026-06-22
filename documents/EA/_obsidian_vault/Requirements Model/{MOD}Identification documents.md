---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail"
domain: "Requirements Model"
element_id: 1813866
diagrams: 7
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Identification documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail

## 📝 Notes

Description: 
Table with client's identification documents. See 06.030 Show Client Data.

Document type name
Enumeration
Information from CIF (Document type name)

LDM source: customerPersonGetResponse.foundRole.document.documentType

Document number
Information from CIF (Document Number)

LDM source: customerPersonGetResponse.foundRole.document.documentCode

{DEL LOR-9883}- if UIDTokenUsedYN = true (currently only for India) then system gets documentNumber using Use original number instead of alias for Unique Id document rule, see the use case 06.030 Show Client Data{/DEL}

## 🔗 Connections (2)

- → Dependency: [[{MOD}08.900 Show available collection tools for client's contracts (show documents)]]
- → Dependency: [[{MOD}06.030 Show client data (show documents)]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: Client detail
- Custom: Client detail - IN
- Custom: Client detail - KZ
- Custom: Client detail - PH
- Custom: Client detail - VN

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document type | Document Type Name |  |
| {MOD}Document number | String |  |
