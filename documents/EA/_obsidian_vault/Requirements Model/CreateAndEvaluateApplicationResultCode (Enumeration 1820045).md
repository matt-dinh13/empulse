---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1820045
diagrams: 3
connections: 1
tags:
  - enumeration
  - requirements-model
---

# 📝 CreateAndEvaluateApplicationResultCode

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

!!!Při nejbližší příležitosti přejmenovat třeba na EvaluationResultCode, protože je to reusnuté na více místech.

## 🔗 Connections (1)

- ← Dependency: [[CreateAndEvaluateApplicationFault (Class 1820011)]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Logical: ApplicationManagementWS_v21 - CreateAndEvaluateApplication
- Logical: ApplicationManagementWS_v21 - InitiateEvaluation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| INVALID_APPLICATION_DATA |  |  |
| UID_CHECK_FAILED |  |  |
| INELIGIBLE_INSURANCE |  |  |
| INVALID_CUSTOMER_OFFER_CODE |  |  |
| MISSING_OFFER_CODE |  |  |
| MISSING_SALESROOM |  |  |
| MISSING_RELIP_CODE |  |  |
| INVALID_RELIP_CODE |  |  |
