---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9290 - Copy DDM references from application to contract"
domain: "Requirements Model"
element_id: 1817753
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Find identical direct debit mandate

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9290 - Copy DDM references from application to contract

## 📝 Notes

Following attributes are compared:

	
- DDM_ID //i.e. DDM.Code stored in Application_to_DDM.DDM_ID / Contract_to_DDM.DDM_ID


If exists a record, where value of such attribute equals to the value from the input, then such record is considered as identical.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Find identical records]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9290 - Copy DDM references from application to contract
- Custom: Update application - Business rules
