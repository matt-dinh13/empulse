---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests"
domain: "Analysis Model"
element_id: 1608927
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PAYHOLResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PAYHOL Service Requests

## 📝 Notes

A preview of PAYHOL service request data related to provided contract and deferral periods

## 🔗 Connections (2)

- ← Dependency: [[PAYHOLServiceRequestPreview]]
- ← Dependency: [[PAYHOLServiceRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Contract PAYHOL Service Requests - create request
- Logical: Contract PAYHOL Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| maxDeferralPeriods | int |  |
| deferralPeriods | int |  |
| feePerPeriod | money |  |
| firstDueDateAfterDeferral | date |  |
| termAfterDeferral | int |  |
| feeTotal | money |  |
| lastDueDateAfterDeferral | date |  |
| expectedIRAfterDeferral | percent |  |
| installmentNumberToDeferral | int |  |
| installmentDueDateToDeferral | date |  |
