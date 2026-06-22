---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL"
domain: "Requirements Model"
element_id: 1706213
diagrams: 5
connections: 1
tags:
  - enumeration
  - requirements-model
---

# 📝 RegisterContractFaultType

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL

## 📝 Notes

Result error types of automatic contract registration.

## 🔗 Connections (1)

- ← Dependency: [[RegisterContractFault]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL
- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
- Custom: CBL-9757 (CLM-3028) Check Income proof document
- Custom: REQ #2 - Implement DDM document attributes validation before registration
- Logical: ContractOperationWS - RegisterContract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CONTRACT_NOT_FOUD_REGISTRATION_FAILED |  |  |
| CONTRACT_NOT_REGISTRATED_COMMODITY_VALIDATION_FAILED |  |  |
| CONTRACT_NOT_REGISTRATED_DOCUMENT_TYPE_CR_NOT_FOUND |  |  |
| CONTRACT_NOT_REGISTRATED_UNIQUE_CHASSIS_AND_ENGINE_NUMBERS_VALIDATION_FAILED |  |  |
| CONTRACT_NOT_REGISTRATED_PROOF_CHECK_VALIDATION_FAILED |  |  |
| ALL_DOCS_MUST_BE_CHECKED_PRECONDITION_FAILED |  |  |
| DOC_MISTAKES_MUST_BE_CLOSED_CANCELLED_PRECONDITION_FAILED |  |  |
| {ADD}CONTRACT_ALREADY_REGISTERED |  |  |
| {ADD}DOC_DDM_ATTRIBUTE_NOT_FILLED |  |  |
| {ADD}DOC_REQUIRED_ATTRIBUTE_NOT_FILLED |  |  |
| {ADD}DOC_INCOME_PROOF_ATTRIBUTE_NOT_FILLED |  |  |
