---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screenstwt"
domain: "Requirements Model"
element_id: 1814069
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Identification documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screenstwt

## 📝 Notes

Table with client's identification documents from contract - contains all documents with DOC_ID attribute

{DEL LOR-9883}- if UIDTokenUsedYN = true (currently only for India) then system gets documentNumber using Get original number instead of alias for Unique Id document rule, see the use case 01.210 Show contract{/DEL}

## 🔗 Connections (1)

- → Dependency: [[{MOD}01.210 Show client data (show documents)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: Tab-Client

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DocumentType | Document Type Name |  |
| {MOD}Document number | String |  |
