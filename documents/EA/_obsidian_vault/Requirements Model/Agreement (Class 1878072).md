---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)/LOR-9174 Implement getAgreement method"
domain: "Requirements Model"
element_id: 1878072
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Agreement

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)/LOR-9174 Implement getAgreement method

## 🔗 Connections (3)

- → Dependency: [[PreparedDocument (Class 1878074)]]
- ← Dependency: [[GetAgreement]]
- → Dependency: [[PrintoutDataSource (Class 1878069)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9174 Implement getAgreement method
- Logical: Agreement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documents | PreparedDocument |  |
| printoutDataSources | PrintoutDataSource |  |
| validUntil | date |  |
