---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests"
domain: "Analysis Model"
element_id: 1868944
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PayholServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests

## 📝 Notes

An extension of The Loan Service Request for PAYHOL service

## 🔗 Connections (2)

- → Usage: [[REQ#1 (Boundary 1868959)]]
- → Generalization: [[LoanServiceRequest (Class 1868957)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| deferredPeriodStartDate | datetime |  |
| deferredPeriodsNumber | int |  |
| {ADD}firstDeferredDueDate | datetime |  |
