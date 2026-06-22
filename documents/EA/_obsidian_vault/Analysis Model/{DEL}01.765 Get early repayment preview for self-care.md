---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869816
diagrams: 3
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}01.765 Get early repayment preview for self-care

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

{DEL CSI-2018}replaced with BSL REST method of /bsl/openapi/v1.0/contractservices/{serviceId}/ferevaluation{/DEL} 
Use case provides early repayment preview for self-care purposes

Supports only FER and COP services.

GET.../bsl/openapi/v1.0/customers/{cuid}/contracts/{contractNumber}/services/{serviceId}/earlyRepaymentPreviews

## 🔗 Connections (5)

- → Realisation: [[01.765 Get early repayment preview for self-care]]
- → Dependency: [[Supported contract statuses for self-care]]
- → UseCase «include»: [[08.065 Calculate Cooling-off period repayment preview]]
- → UseCase «include»: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Use Case: Customer Self-Care API - Use Case Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| k to zrusime | int |  |
