---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Header Client detail/IN"
domain: "Modules"
element_id: 1799951
diagrams: 4
connections: 1
tags:
  - class
  - modules
---

# 🔷 Identification documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Header Client detail/IN

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

{CLM-4266/}If user does not have access rights linked this element is hidden or masked (country specific setting).{/ADD}

{ADD CLM-747}- if UIDTokenUsedYN = true (currently only for India) then system gets documentNumber using Use original number instead of alias for Unique Id document rule, see the use case 06.030 Show Client Data{/ADD}

## 🔗 Connections (1)

- → Dependency: [[{MOD}06.030 Show client data (show documents) (Requirement 1799942)]]

## 📊 Appears In (4 diagrams)

- Custom: Client detail - IN
- Custom: Client detail - KZ
- Custom: Client detail - VN
- Custom: CLM-4266 - Personal data masking

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document type | Document Type Name |  |
| Document number | String |  |
