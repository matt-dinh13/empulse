---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9757 (CLM-3028) Check Income proof document"
domain: "Requirements Model"
element_id: 1688634
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Create client document type INCOME_PROOF (configuration)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9757 (CLM-3028) Check Income proof document

## 📝 Notes

Goal of this task is to create client document Income proof for IN:
Document_Type
.Code = 'INCOME_PROOF'
.Name = "Income proof'

With attribute Income proof type:
Document_Type -> Document_Type_Attribute
.Code = 'INCOME_PROOF_TYPE'
.Required = False

Attribute enumeration in ('PERFIOS', 'SCAN') displayed as selectbox in Edit document modal.

## 📊 Appears In (1 diagrams)

- Custom: CBL-9757 (CLM-3028) Check Income proof document
