---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination"
domain: "Requirements Model"
element_id: 1759718
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9293 Prepare available active contracts for Top Up

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination

## 📝 Notes

As a system, I will prepare available active contracts for Top Up selection

Proposed solution
Select contracts based on:

	
- Input parameter for algorithm is offer from OFS
	
- all assigned products of the offer have the same valid top up service (service type TOPUP) assigned
	
- get CUID's active contract (COMA /rest/v12/contracts)

## 🔗 Connections (1)

- → Realisation: [[LOR-9195 Top Up New Product Set Up - Loan Origination]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9195 Top Up New Product Set Up - Loan Origination
- Custom: LOR-9293 Prepare available active contracts for Top Up
