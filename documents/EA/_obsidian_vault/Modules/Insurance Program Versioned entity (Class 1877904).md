---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model"
domain: "Modules"
element_id: 1877904
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Insurance Program Versioned entity

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model

## 📝 Notes

Extraction of common attributes for versioned entities (as Product, Service, Tariff).

## 🔗 Connections (2)

- → Dependency: [[Insurance Program Version Status (Class 1877914)]]
- ← Generalization: [[Insurance Program (Class 1877910)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance Program versions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Version Number | Number |  |
| Version Status | Version Status |  |
| Version Creation Date | DateTime |  |
| Created by | User |  |
| Version Activation Date | DateTime |  |
| Planned Activation Date | DateTime |  |
| Activated by | User |  |
| Version Termination Date | DateTime |  |
| Terminated by | User |  |
