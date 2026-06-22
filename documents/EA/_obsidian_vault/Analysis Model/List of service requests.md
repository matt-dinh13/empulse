---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface"
domain: "Analysis Model"
element_id: 1779770
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 List of service requests

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface

## 📝 Notes

List of all active and inactive Loan Service Requests (i.e. Loan Service Request.Current Status in) related to all contracts of one client

LDM: Loan Service Requests by 08.353 Browse requests for services

Read only.
Ordering: Order by Request date descendent

Localization code: SER_LoanServiceRequestsList

## 🔗 Connections (2)

- → Dependency: [[08.359 Print service request document (UseCase 1879711)]]
- → Dependency: [[08.357 Cancel request for loan service (UseCase 1879719)]]

## 📊 Appears In (1 diagrams)

- Custom: Browse loan service requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Cancel request | icon |  |
| Contract |  |  |
| Created by |  |  |
| Print request | icon |  |
| Request date |  |  |
| Request status |  |  |
| Request type |  |  |
| Total charged fees |  |  |
