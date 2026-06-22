---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests"
domain: "Analysis Model"
element_id: 1561108
diagrams: 3
connections: 10
tags:
  - interface
  - analysis-model
---

# 🔶 {ADD}LRESServiceRequests

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests

## 📝 Notes

{ADD CLM-3060 /}

## 🔗 Connections (10)

- → Usage: [[{ADD}LRESServiceRequestOffers]]
- → Dependency: [[01.812 Confirm ContractLRESRequest offer service (UseCase 1869797)]]
- → Usage: [[{ADD}LRESServiceRequest]]
- → Aggregation: [[LRESServiceRequests]]
- → Dependency: [[01.811 Get ContractLRESRequest offer service]]
- → Usage: [[{ADD}LRESServiceRequest]]
- → Usage: [[{ADD}LRESServiceRequestCreateParams]]
- → Usage: [[{ADD}LRESServiceRequestGetOfferParams]]
- → Dependency: [[01.810 Create ContractLRESRequest service (UseCase 1869794)]]
- → Usage: [[{ADD}LRESServiceRequestConfirmParams]]

## 📊 Appears In (3 diagrams)

- Logical: Contract LRES Service Requests - confirm offer
- Logical: Contract LRES Service Requests - create request
- Logical: Contract LRES Service Requests - get offer
