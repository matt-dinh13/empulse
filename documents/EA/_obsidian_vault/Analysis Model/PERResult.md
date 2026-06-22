---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests"
domain: "Analysis Model"
element_id: 1874216
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PERResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract PER Service Requests

## 📝 Notes

Attributes of the PER service requests.
All values are copied from PER Result structure calculated by {ADD}Calculate Partial ER preview - Step1  and {ADD}Calculate Partial ER preview - Step2

## 🔗 Connections (2)

- ← Dependency: [[{ADD}PERServiceRequest]]
- ← Dependency: [[{ADD}PERServiceRequestPreview]]

## 📊 Appears In (2 diagrams)

- Logical: Contract PER Service Requests - create request
- Logical: Contract PER Service Requests - get preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientAmount | money |  |
| newMonthlyInstallment | money |  |
| newTerm | int |  |
| perDueDate | date |  |
| perDueDateTolerance | date |  |
| perRecommendedDate | date |  |
| prepaidAmountTillDueDate | money |  |
| feesSum | money |  |
| totalOverdueAmount | money |  |
| totalPrepaymentsAmount | money |  |
| perType | string |  |
| clientMinimalAmount | money |  |
| clientMaximalAmount | money |  |
| {ADD}amountToPay | money |  |
