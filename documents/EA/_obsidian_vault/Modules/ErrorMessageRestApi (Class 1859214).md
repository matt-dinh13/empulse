---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/cancelContract"
domain: "Modules"
element_id: 1859214
diagrams: 10
connections: 15
tags:
  - class
  - modules
---

# 🔷 ErrorMessageRestApi

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/cancelContract

## 🔗 Connections (15)

- ← Dependency: [[{ADD}Get registration]]
- ← Dependency: [[{ADD}checkAll (Class 1806656)]]
- ← Dependency: [[{ADD}uncheckAll]]
- ← Dependency: [[{ADD}checkDocument]]
- ← Dependency: [[{ADD}uncheckDocument]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[Contract (Interface 1839994)]]
- ← Dependency: [[{ADD}payOffContract (Class 1854214)]]
- ← Dependency: [[getRegistrationDocuments (Class 1855965)]]
- → Dependency: [[ErrorRestApi]]
- → Dependency: [[PropertyErrorApi (Class 1859196)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (10 diagrams)

- Logical: cancelContract
- Logical: cancelContract
- Logical: checkAll
- Logical: checkDocument
- Logical: getRegistration
- Logical: getRegistrationDocuments
- Logical: payOffContract
- Logical: uncheckAll
- Logical: uncheckDocument
- Logical: writeOffContract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errors | ErrorRestApi |  |
| propertyErrors | PropertyErrorApi |  |
| traceId | string |  |
